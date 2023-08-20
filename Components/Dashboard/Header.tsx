import Image from "next/image";
import Indicator from "./Shared/HeaderIndicator";
import Profile from "./Shared/Profile";
export default function Header() {
  return (
    <header className=" py-1 px-5 flex flex-row gap-5 items-center bg-white fixed top-0 w-full right-0 h-20">
      <Image src={'/assets/logo.png'} alt="Logo" width={70} height={0} ></Image>
      <Profile />
      <Indicator icon="fi fi-rr-comment-alt-dots" number={3} />
      <Indicator icon="fi fi-rr-code-pull-request" number={3} />
    </header>
  );
}
