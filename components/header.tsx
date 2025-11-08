import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header
      className="h-16 sm:h-20 font-bold flex items-center justify-between
                 my-8 print:hidden"
    >
      <p className="text-xl sm:text-2xl">
        theo
        <br />
        <Link href="/" className="underline">
          vararu.org
        </Link>
      </p>
      <div
        className="h-16 sm:h-20 w-32 sm:w-40 perspective-[512px]
                   perspective-origin-[50%_50%]"
      >
        <Logo />
      </div>
    </header>
  );
}
