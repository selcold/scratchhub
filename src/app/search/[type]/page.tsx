"use client";

import { CircleUserRound, Flag, GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Search({ params }: { params: { type: string } }) {
  const searchParams = useSearchParams();
  const params_q = searchParams.get("q");

  return (
    <>
      <div className="bg-blue-500 dark:bg-blue-800 w-full">
        <div className="w-full md:w-[768px] mx-auto">
          <h1 className="text-white text-5xl font-bold text-center py-5">
            検索
          </h1>
        </div>
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-800 w-full">
        <div className="flex flex-wrap justify-center w-full md:w-[768px] mx-auto">
          <Link href={`/search/projects?q=${params_q}`}>
            <button
              className={`${
                params.type === "projects" && `border-b-emerald-400 border-b-4`
              } flex flex-col items-center px-5 py-3`}
            >
              <Flag
                className={`${
                  params.type === "projects"
                    ? `fill-emerald-400 stroke-emerald-500`
                    : `stroke-neutral-700 dark:stroke-neutral-300`
                }`}
              />
              <span className="text-sm">作品</span>
            </button>
          </Link>
          <Link href={`/search/studios?q=${params_q}`}>
            <button
              className={`${
                params.type === "studios" && `border-b-emerald-400 border-b-4`
              } flex flex-col items-center px-5 py-3`}
            >
              <GalleryVerticalEnd
                className={`${
                  params.type === "studios"
                    ? `fill-emerald-400 stroke-emerald-500`
                    : `stroke-neutral-700 dark:stroke-neutral-300`
                }`}
              />
              <span className="text-sm">スタジオ</span>
            </button>
          </Link>
          <Link href={`/search/user?q=${params_q}`}>
            <button
              className={`${
                params.type === "user" && `border-b-emerald-400 border-b-4`
              } flex flex-col items-center px-5 py-3`}
            >
              <CircleUserRound
                className={`${
                  params.type === "user"
                    ? `stroke-emerald-500`
                    : `stroke-neutral-700 dark:stroke-neutral-300`
                }`}
              />
              <span className="text-sm">ユーザー</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full"></div>
      <div className="w-full"></div>
      <div className="flex flex-col gap-3">
        <span>Type: {params.type}</span>
        <span>Params_q: {params_q}</span>
      </div>
    </>
  );
}
