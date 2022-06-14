import { useReducer, useState } from "react";
import TodoList from "./components/TodoList/TodoList";

const reducer = (todos, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...todos,
				{
					id: todos?.length + 1,
					text: action.text,
					completed: false,
				},
			];
		case "TOGGLE_TODO":
			return todos?.map((todo) => {
				if (todo?.id === action?.id) {
					return {
						...todo,
						completed: !todo?.completed,
					};
				} else {
					return todo;
				}
			});
		case "DELETE_TODO":
			return todos?.filter((todo) => {
				return todo?.id !== action?.id;
			});
		default:
			return todos;
	}
};

function App() {
	const [text, setText] = useState("");

	const [todos, dispatch] = useReducer(reducer, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setText("");
		dispatch({ type: "ADD_TODO", text });
	};

	return (
		<div className='App'>
			<h1>Todos</h1>
			<h5>
				Completed todos are :{" "}
				{
					todos.filter((todo) => {
						return todo.completed === true;
					}).length
				}
			</h5>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={text}
					onChange={(e) => setText(e?.target?.value)}
				/>
			</form>
			<TodoList todos={todos} dispatch={dispatch} />
		</div>
	);
}

export default App;
