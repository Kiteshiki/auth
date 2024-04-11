import { redirect } from "next/navigation";
import { createClient } from "~/utils/supabase/server";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  const { session } = data;

  if (session) {
    redirect("/");
  }

  return <div className="grid h-screen place-items-center">{children}</div>;
}
