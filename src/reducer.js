import {ADD_TODO} from './actions';

const initialState = {
	todos: [
		{
			text: 'Hello World'
		}
	]
};

export default function todoApp(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
				...state.todos,
				{text: action.text}
				]
			})
		default:
			return state
	}
}