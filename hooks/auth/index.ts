import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { createClient } from "~/utils/supabase/client";

export const useAuth = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    isLoggedIn: !!session,
    user,
  };
};
