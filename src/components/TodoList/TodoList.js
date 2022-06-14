import Todo from "../Todo/Todo";

const TodoList = ({ ...props }) => {
	return (
		<>
			{props?.todos?.map((todo) => {
				return <Todo todo={todo} dispatch={props?.dispatch} />;
			})}
		</>
	);
};

export default TodoList;
