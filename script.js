/*let classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}*/

let todo_list = [];
ul = document.getElementById('todo_list');
//let list = document.getElementById('todo-list').textContent;
let itemCountSpan = parseInt(document.getElementById('item-count').textContent);
let uncheckedCountSpan = parseInt(document.getElementById('unchecked-count').textContent);
let delete_flag = "no";
let check_flag = "no";
let uncheck_flag = "no";



function newTodo() {

	if (delete_flag === "no" && check_flag === "no" && uncheck_flag === "no" ) {

		itemCountSpan = itemCountSpan + 1;
		uncheckedCountSpan = uncheckedCountSpan + 1;
		document.getElementById('item-count').textContent = itemCountSpan;
		document.getElementById('unchecked-count').textContent = uncheckedCountSpan;
	
};