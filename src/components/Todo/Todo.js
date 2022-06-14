import React from "react";

const Todo = ({ ...props }) => {
	return (
		<>
			<div
				id={props?.todo?.id}
				style={{
					textDecoration: props?.todo?.completed ? "line-through" : "none",
				}}
			>
				{props?.todo?.text}
				<button
					onClick={() =>
						props?.dispatch({ type: "TOGGLE_TODO", id: props?.todo?.id })
					}
					disabled={props?.todo?.completed}
				>
					Toggle
				</button>
				<button
					onClick={() =>
						props?.dispatch({ type: "DELETE_TODO", id: props?.todo?.id })
					}
					disabled={props?.todo?.completed}
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default Todo;
