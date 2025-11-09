import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header
      className="my-8 flex h-16 items-center justify-between font-bold sm:h-20
        print:hidden"
    >
      <p className="text-xl sm:text-2xl">
        theo
        <br />
        <Link href="/" className="underline">
          vararu.org
        </Link>
      </p>
      <div
        className="h-16 w-32 perspective-[512px] perspective-origin-[50%_50%]
          sm:h-20 sm:w-40"
      >
        <Logo />
      </div>
    </header>
  );
}
