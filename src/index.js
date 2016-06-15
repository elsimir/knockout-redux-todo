import { createStore } from 'redux';
import ko from 'knockout';
import {connectStore, connectComponent} from '../vendor/redux-knockout';
import todoApp  from './reducer';
import { addTodo } from './actions'; 

let store = createStore(todoApp);
connectStore(store);

class TodoViewModel {

	constructor() {
		this.callback = () => {
			store.dispatch(addTodo('Hello'));
		}
	}

}

class TodoList {

	constructor(params) {
		this.state = params.state;
		this.actions = params.actions;

		this.todos = ko.computed(() => this.state().todos);
	}
}

const boundTodoList = connectComponent(TodoList)

ko.components.register('todo-list', {
	viewModel: boundTodoList,
	template: '<ul data-bind="foreach: todos"><li data-bind="text: text"></li></ul>'
});

ko.applyBindings(new TodoViewModel(), document.getElementById('app'));

