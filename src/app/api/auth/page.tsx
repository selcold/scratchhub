/*
 * page.tsx
 * このファイルは、認証ページのコンポーネントです。
 * リダイレクトURLからprivateCodeを取得し、認証処理を行います。
 */

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ScratchAuthSET_session } from "scratch-auth-react";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const privateCode = searchParams.get("privateCode");

  useEffect(() => {
    async function auth() {
      await ScratchAuthSET_session(privateCode); //アカウント認証
      window.location.href = `/`; //ホーム移動
    }
    auth();
  }, []); //空の依存配列を渡すことで、初回のレンダリング時にのみ実行される

  return <span>処理中...</span>;
}
