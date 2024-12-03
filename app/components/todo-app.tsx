import { getAllTodos } from "@/lib/handlers";
import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

export async function TodoApp() {
	const todos = await getAllTodos();
	return (
		<div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-4 shadow-md">
			<h1 className="mb-4 font-bold text-2xl text-gray-800">Todo App</h1>
			<TodoForm />
			<TodoList todos={todos} />
		</div>
	);
}
