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
	});
};