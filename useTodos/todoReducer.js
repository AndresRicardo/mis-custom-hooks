export const todoReducer = (state, action) => {
	switch (action.type) {
		case "[TODO] Add todo":
			console.log("Action.type = [TODO] Add todo");
			return [...state, action.payload];

		case "[TODO] Switch todo":
			console.log("Action.type = [TODO] Switch todo");

			return state.map((item) => {
				return item.id !== action.payload.id
					? item
					: { ...item, done: !item.done };
			});

		case "[TODO] Delete todo":
			console.log(`Action type: [TODO] Delete todo`);
			return state.filter((item) => item.id !== action.payload.id);

		default:
			return state;
	}
};
