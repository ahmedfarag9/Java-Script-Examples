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

function newTodo() {

	itemCountSpan = itemCountSpan + 1;
	uncheckedCountSpan = uncheckedCountSpan + 1;
	document.getElementById('item-count').textContent = itemCountSpan;
	document.getElementById('unchecked-count').textContent = uncheckedCountSpan;


};
