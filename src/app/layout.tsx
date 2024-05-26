import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";

// next-themes
import { ThemeProvider } from "next-themes";

import Header from "@/components/client/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScratchHub",
  description:
    "ScratchHubはScratchに登録されているプロジェクトに様々な条件を適応し検索したり、プロジェクトやユーザーの詳細情報を取得することができるサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="" suppressHydrationWarning>
      <body
        className={`w-full min-h-[calc(100vh_-_theme(spacing.16))] ${inter.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class">
          <Suspense fallback={`...`}>
            <Header/>
          </Suspense>
          <main className="w-full h-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
