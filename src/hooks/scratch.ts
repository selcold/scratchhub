"use client";

import { useEffect, useState } from "react";
import { ScratchAPIGet_User } from "./scratch-api";

export function useUserInfo(session: string | null): any | null {
  const [userinfo, setUserinfo] = useState<string | null>(null);

  useEffect(() => {
    try {
      const ServerRequest = async () => {
        if (session){
            const result = await ScratchAPIGet_User(session);
            setUserinfo(result);
        }
      };
      ServerRequest();
    } catch (err) {
      console.log(err);
    }
  }, [session]);

  return userinfo;
}
