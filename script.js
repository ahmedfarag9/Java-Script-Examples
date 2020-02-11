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
let delete_flag = "no";
let check_flag = "no";
let uncheck_flag = "no";

//Function to add a new TODO object
function newTodo() {

	//If a value is just added to the TODO list
	if (delete_flag === "no" && check_flag === "no" && uncheck_flag === "no" ) {

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
		delete_flag = "no";
		check_flag = "no";
		uncheck_flag = "no";
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
					delete_flag = "yes";

					//Check wether to edit check/uncheck counter or not
					if ( todo_list[i].TODO_CHECKBOX === 'unchecked' ) {
						uncheckedCountSpan = uncheckedCountSpan - 1;
					}

	});
};