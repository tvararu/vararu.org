import Link from "next/link";
import Logo from "@/components/logo";
import SocialIcon from "@/components/social-icon";

export default function Header() {
  return (
    <header className="my-8 flex h-16 items-center justify-between sm:h-20">
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold sm:text-2xl">
          theo@
          <Link href="/" className="underline">
            vararu.org
          </Link>
        </p>
        <div className="flex gap-3">
          <SocialIcon
            href="https://github.com/tvararu"
            icon="/github-dark.svg"
            label="GitHub profile"
          />
          <SocialIcon
            href="https://x.com/tvararu"
            icon="/x-dark.svg"
            label="X profile"
          />
        </div>
      </div>
      <Logo />
    </header>
  );
}
