import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { WRAP } from "./layout";

export default function SiteHeader() {
  return (
    <header className={`${WRAP} flex items-center justify-between gap-4 pt-7`}>
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/images/icon.png"
          alt=""
          width={28}
          height={28}
          className="block size-7 rounded-[22%]"
        />
        <span className="font-display font-bold text-[20px]">FlipBit</span>
      </Link>
      <ThemeToggle />
    </header>
  );
}
