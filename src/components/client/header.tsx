"use client";

import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ScratchAuth_Login, ScratchAuth_Logout } from "scratch-auth-react";

import _cfg from "../../../site.config";
import { ThemeSwitch } from "./theme-toggle";
import { useAuthSession } from "@/hooks/scratch-auth";
import { useUserInfo } from "@/hooks/scratch";

export default function Header() {
  const session = useAuthSession();
  const userInfo = useUserInfo(session);

  return (
    <header className="bg-background sticky top-0 flex h-14 items-center gap-4 flex-row justify-center w-full px-4 border-b">
      <nav className="hidden flex-col font-medium items-stretch w-auto h-full md:flex md:flex-row md:text-sm">
        <Link href="/">
          <h1 className="text-muted-foreground text-xl font-bold self-auto flex items-center w-auto h-full px-3 hover:scale-[103%] transition-all duration-300 ease-in-out">
            {_cfg.header.title}
          </h1>
        </Link>
        {_cfg.header.navigation.map((link, idx) => (
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground self-auto flex items-center w-auto h-full px-3"
            href={link.href}
            key={idx}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <SheetClose>{_cfg.header.title}</SheetClose>
            </Link>
            {_cfg.header.navigation.map((link, idx) => (
              <Link
                className="text-muted-foreground hover:text-foreground"
                href={link.href}
                key={idx}
              >
                <SheetClose>{link.label}</SheetClose>
              </Link>
            ))}
          </nav>
          <div className="py-5">
            <SheetClose>
              <span>
                <ThemeSwitch />
              </span>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex w-auto items-center gap-4 md:gap-2 lg:gap-4">
        <form
          className="ml-auto flex-1 sm:flex-initial"
          action="/search/projects?"
        >
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              name="q"
              placeholder="検索"
              className="light pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <span className="hidden text-muted-foreground transition-colors hover:text-foreground self-auto md:flex items-center w-auto h-full px-3">
          <ThemeSwitch />
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage
                  src={userInfo?.profile.images["90x90"]}
                  alt={`@${session || `You`}`}
                />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{session || `You`}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
            <DropdownMenuItem disabled>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            {session ? (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => ScratchAuth_Logout()}
              >
                ログアウト
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => ScratchAuth_Login()}
              >
                ログイン
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
