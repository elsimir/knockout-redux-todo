import ko from 'knockout';

export function connectStore(store) {
	this.store = store;
}


export function connect(component, mapStateToParams = (params) => params, mapDispatchToParams = (dispatch) => dispatch) {
	return (params) => {
		let _state = ko.observable(this.store.getState());
		let state = ko.computed(() => _state())
		this.store.subscribe(() => {
			let newState = mapStateToParams(this.store.getState());
			_state(newState);
		});

		params.actions = mapDispatchToParams(this.store.dispatch);
		params.state = state;
		return new component(params);
	};
}