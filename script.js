//Variables to link js elements with the associated CSS class names
let classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

//TODO list
let todo_list = [];

//getting elements from HTML DOM
ul = document.getElementById('todo_list');
//let list = document.getElementById('todo-list').textContent;
let itemCountSpan = parseInt(document.getElementById('item-count').textContent);
let uncheckedCountSpan = parseInt(document.getElementById('unchecked-count').textContent);

//flag variables
let delete_flag = false;
let check_flag = false;
let uncheck_flag = false;

//Function to add a new TODO object
function newTodo() {

	//If a value is just added to the TODO list
	if (delete_flag === false && check_flag === false && uncheck_flag === false ) {

		//Increment the TODO counters
		itemCountSpan = itemCountSpan + 1;
		uncheckedCountSpan = uncheckedCountSpan + 1;

		//Edit counters values in HTML DOM
		document.getElementById('item-count').textContent = itemCountSpan;
		document.getElementById('unchecked-count').textContent = uncheckedCountSpan;
	
		//Add new TODO object to the TODO array
		todo_list.push(	{
			TODO_ITEM: parseInt(itemCountSpan),
			TODO_CHECKBOX: 'unchecked',
			TODO_TEXT: document.getElementById('todo-text').value,
			});

	}

	//If an item is added to the TODO list and another item is deleted or checked/unchecked then update the TODO list
	else {
		document.getElementById('item-count').textContent = itemCountSpan;
		document.getElementById('unchecked-count').textContent = uncheckedCountSpan;

		//Reset flag variables
		delete_flag = false;
		check_flag = false;
		uncheck_flag = false;
	}
	
	//Editing the TODO list in the HTML DOM
	ul.innerHTML = '';

	//For each item in the array create a html list element 
	todo_list.forEach(function (item) {
		let li = document.createElement('li');
		ul.appendChild(li);
		//add list elements attributes	
		li.innerHTML += ( parseInt(todo_list.indexOf(item)) + 1 )  + "-     " + item.TODO_TEXT  + ",   " + item.TODO_CHECKBOX + "   " ;
		li.className = classNames.TODO_TEXT;

		//Add a delete button
		let delete_button = document.createElement('BUTTON');
		li.appendChild(delete_button);
		delete_button.innerText = "delete";
		delete_button.className = classNames.TODO_DELETE;
		delete_button.id = parseInt(item.TODO_ITEM);

		//Add a check/uncheck button
		let check_button = document.createElement('BUTTON');
		li.appendChild(check_button);
		check_button.innerText = "check/uncheck";
		check_button.className = classNames.TODO_CHECKBOX;
		check_button.id = parseInt(item.TODO_ITEM);
		
		//IF delete button is clicked
		delete_button.onclick = function deleteItem() {

			//Get delete button id			
			delete_item_id = parseInt(delete_button.id)

			//Find deleted item and delete it form TODO array
			for( var i = 0; i < todo_list.length; i++){ 
				if ( todo_list[i].TODO_ITEM === delete_item_id ) {
					itemCountSpan = itemCountSpan - 1;
					delete_flag = true;

					//Check wether to edit check/uncheck counter or not
					if ( todo_list[i].TODO_CHECKBOX === 'unchecked' ) {
						uncheckedCountSpan = uncheckedCountSpan - 1;
					}

					//delete the item and re-run the add function to refresh the list values on webpage
					todo_list.splice(i , 1);
					newTodo();
				}
			}
		};

		// if check button is clicked
		check_button.onclick = function checkItem() {

			//Get check/uncheck button id
			check_item_id = parseInt(check_button.id)

			//Find checked/unchecked item and edit it inside TODO array						
			for( var j = 0; j < todo_list.length; j++){ 
				if ( todo_list[j].TODO_ITEM === check_item_id ) {
					
					//If the item is unchecked then check it and re-run the add function
					if ( todo_list[j].TODO_CHECKBOX === 'unchecked' ) {
						todo_list[j].TODO_CHECKBOX = 'checked';
						check_flag = true;
						uncheckedCountSpan = uncheckedCountSpan - 1;
						newTodo();
					}
					//else uncheck it and re-run the add function
					else {
						todo_list[j].TODO_CHECKBOX = 'unchecked';
						uncheck_flag = true;
						uncheckedCountSpan = uncheckedCountSpan + 1;
						newTodo();
					}
				}
			};
		};
	});
};