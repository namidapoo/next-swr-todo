// updateだけクライアントコンポーネントから呼び出す必要があったのでモジュールとして分離
"use server";

import { updateTodo } from "@/lib/handlers";
import { revalidatePath } from "next/cache";

export async function updateTodoAction(id: number, isCompleted: boolean) {
	await updateTodo(id, isCompleted);
	revalidatePath("/");
}
