"use client";

import { updateTodoAction } from "@/lib/action";
import type { Tables } from "@/lib/database.types";
import { useTransition } from "react";

export function TodoItem({ todo }: { todo: Tables<"todo"> }) {
	const [isPending, startTransition] = useTransition();

	return (
		<div className="flex items-center">
			<input
				type="checkbox"
				id={`todo-${todo.id}`}
				className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
				defaultChecked={todo.isCompleted}
				disabled={isPending}
				onChange={(e) => {
					const isCompleted = e.target.checked;
					startTransition(() => {
						updateTodoAction(todo.id, isCompleted);
					});
				}}
			/>
			<label
				htmlFor={`todo-${todo.id}`}
				className={`${
					todo.isCompleted ? "text-gray-500 line-through" : "text-gray-800"
				}`}
			>
				{todo.title}
			</label>
		</div>
	);
}
