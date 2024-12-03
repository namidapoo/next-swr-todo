import type { Tables } from "@/lib/database.types";
import { deleteTodo } from "@/lib/handlers";
import { TrashIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { TodoItem } from "./todo-item";

export function TodoList({ todos }: { todos: Array<Tables<"todo">> | null }) {
	if (!todos) {
		return <p>Loading...</p>;
	}
	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex items-center justify-between rounded-md bg-gray-100 p-3"
				>
					<TodoItem todo={todo} />
					<form
						action={async () => {
							"use server";
							await deleteTodo(todo.id);
							revalidatePath("/");
						}}
					>
						<button
							type="submit"
							className="text-red-500 hover:text-red-700 focus:outline-none"
						>
							<TrashIcon className="h-5 w-5" />
							<span className="sr-only">Delete Todo</span>
						</button>
					</form>
				</li>
			))}
		</ul>
	);
}
