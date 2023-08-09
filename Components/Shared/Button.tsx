import React from "react";
import Link from "next/link";

const Button = ({ styles }: { styles?: string }) => {
  return (
    <Link
      href={"./contact"}
      type={"button"}
      className={` rounded-[10px] py-4 px-6 bg-green-gradient font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      شروع همکاری
    </Link>
  );
};

export default Button;
