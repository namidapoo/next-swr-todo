import type { Database } from "@/lib/database.types";
import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

export const supabase = createClient<Database>(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
