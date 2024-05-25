"use client";

import { useEffect, useState } from "react";
import { ScratchAPI_Status } from "@/components/server/scratch/main";

export default function Home() {
  const [studios, setStudios] = useState<any | null>(null);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await ScratchAPI_Status(35250649);
        setStudios(res);
      } catch (err) {
        console.error(err);
      }
    };
    func();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-neutral-800">
      {studios ? (
        <div className="text-center bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl text-neutral-400 dark:text-neutral-500">近日公開</h1>
          <img
            src={studios.image}
            alt={studios.title}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-gray-700 dark:text-gray-300 text-3xl font-bold mb-2">
            {studios.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
            {studios.description}
          </p>
          <details>
            <summary className="text-gray-700 dark:text-gray-300">もっと</summary>
            <div className="text-gray-500">
              <p>Host: {studios.host}</p>
              <p>Visibility: {studios.visibility}</p>
              <p>Public: {studios.public ? "Yes" : "No"}</p>
              <p>Open to All: {studios.open_to_all ? "Yes" : "No"}</p>
              <p>Comments Allowed: {studios.comments_allowed ? "Yes" : "No"}</p>
            </div>
          </details>
        </div>
      ) : (
        <div className="text-center bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg animate-pulse">
          <div className="w-28 h-28 bg-gray-300 dark:bg-neutral-700 mx-auto mb-4 rounded-full"></div>
          <h1 className="w-52 h-8 bg-gray-300 dark:bg-neutral-700 mx-auto mb-2 rounded"></h1>
          <p className="w-80 h-5 bg-gray-300 dark:bg-neutral-700 mx-auto mb-2 rounded"></p>
        </div>
      )}
    </div>
  );
}
