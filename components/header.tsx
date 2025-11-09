import Link from "next/link";
import Logo from "@/components/logo";
import SocialIcon from "@/components/social-icon";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="my-8 flex h-16 items-center justify-between sm:h-20">
      <div className="flex flex-col gap-4">
        <h1 className="font-sans text-xl font-bold sm:text-2xl">
          theo@
          <Link href="/" className="underline">
            vararu.org
          </Link>
        </h1>
        <div className="flex gap-4">
          <SocialIcon
            href="mailto:theo@vararu.org"
            icon="/envelope.svg"
            label="Send me an email"
          />
          <SocialIcon
            href="https://github.com/tvararu"
            icon="/github.svg"
            label="GitHub profile"
          />
          <SocialIcon
            href="https://x.com/tvararu"
            icon="/x.svg"
            label="X profile"
          />
        </div>
      </div>
      <Logo />
    </header>
  );
}
