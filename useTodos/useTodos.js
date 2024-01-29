import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, [initialState], init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return {
		todos,
		count: todos.length,
		pending: todos.filter((todo) => !todo.done).length,
		dispatchTodo,
	};
};
