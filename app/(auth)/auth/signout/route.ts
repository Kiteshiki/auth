import { createClient } from "~/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { getUser } from "~/app/actions";

export async function POST(req: NextRequest) {
  const supabase = createClient();

  // Check if a user's logged in
  const { user } = await getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
