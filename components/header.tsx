import Link from "next/link";
import Logo from "@/components/logo";
import SocialIcon from "@/components/social-icon";

export default function Header() {
  return (
    <header className="my-10 flex h-16 items-center justify-between sm:h-20">
      <div className="flex flex-col gap-4">
        <h1 className="font-sans text-xl font-bold sm:text-2xl">
          <Link href="mailto:theo@vararu.org" className="underline">
            theo@vararu.org
          </Link>
        </h1>
        <div className="flex gap-4">
          <SocialIcon
            href="https://github.com/tvararu"
            icon="github"
            label="GitHub profile"
          />
          <SocialIcon
            href="https://x.com/NihilSineTheo"
            icon="x"
            label="X profile"
          />
        </div>
      </div>
      <Logo />
    </header>
  );
}
