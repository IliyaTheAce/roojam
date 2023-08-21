import Image from "next/image";
import Indicator from "./Shared/HeaderIndicator";
import Profile from "./Shared/Profile";
import { GetTodaysMessage, GetUnreadMessages } from "@/lib/Actions/Messages.action";
import Link from "next/link";
export default function Header() {
  const todaysMessages = GetTodaysMessage();
const unreadMessage = GetUnreadMessages();
  return (
    <header className=" py-1 px-5 flex flex-row gap-5 items-center bg-white fixed top-0 w-full right-0 h-20">
      <Link href={'/'}><Image src={'/assets/logo.png'} alt="Logo" width={70} height={0} ></Image></Link>
      <Profile />
      <Indicator icon="fi fi-rr-comment-alt-dots" number={todaysMessages} />
      <Indicator icon="fi fi-rr-code-pull-request" number={unreadMessage} />
    </header>
  );
}
