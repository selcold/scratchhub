"use client";

import { ScratchAuthGET_session } from "scratch-auth-react";

import { useEffect, useState } from "react";

export function useAuthSession() {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const sessionData = await ScratchAuthGET_session(); // session(ユーザー名)を取得
      setSession(sessionData); // session(ユーザー名)を変数に保存
    };
    getSession();
  }, []);

  return session;
}
