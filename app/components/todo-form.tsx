import { addTodo } from "@/lib/handlers";
import { PlusIcon } from "lucide-react";
import { revalidatePath } from "next/cache";

export function TodoForm() {
	return (
		<form
			action={async (formData: FormData) => {
				"use server";
				const title = formData.get("title") as string;
				await addTodo(title);
				revalidatePath("/");
			}}
			className="mb-4 flex"
		>
			<input
				type="text"
				name="title"
				placeholder="Add a new todo"
				className="mr-2 flex-grow rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				<PlusIcon className="h-5 w-5" />
				<span className="sr-only">Add Todo</span>
			</button>
		</form>
	);
}
