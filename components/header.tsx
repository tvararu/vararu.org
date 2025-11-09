import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="my-8 flex h-16 items-center justify-between sm:h-20">
      <p className="text-xl font-bold sm:text-2xl">
        theo@
        <Link href="/" className="underline">
          vararu.org
        </Link>
      </p>
      <Logo />
    </header>
  );
}
