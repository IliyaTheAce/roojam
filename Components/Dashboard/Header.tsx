import Image from "next/image";
import Indicator from "./Shared/HeaderIndicator";
import Profile from "./Shared/Profile";
import Link from "next/link";
import { BaseUrl } from "@/Constants/Config";
export default async function Header() {
  const todaysMessages = await (
    await fetch(new URL(`/api/message/todays`, BaseUrl))
  ).json();
  const unreadMessage = await (
    await fetch(new URL(`/api/message/unread`, BaseUrl))
  ).json();
  return (
    <header className="z-10 py-1 px-5 flex flex-row gap-5 items-center bg-white fixed top-0 w-full right-0 h-20">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt="Logo"
          width={70}
          height={0}
        ></Image>
      </Link>
      <Profile />
      <Indicator icon="fi fi-rr-comment-alt-dots" number={todaysMessages} />
      <Indicator icon="fi fi-rr-code-pull-request" number={unreadMessage} />
    </header>
  );
}
