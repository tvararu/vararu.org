import Link from "next/link";
import Image from "next/image";

interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
  className?: string;
  invert?: boolean;
}

export default function SocialIcon({
  href,
  icon,
  label,
  className = "h-5 w-5",
  invert = false,
}: SocialIconProps) {
  const invertClasses = invert ? "invert dark:invert-0" : "";
  return (
    <Link
      href={href}
      className={`relative ${invertClasses} ${className}`}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={icon}
        alt=""
        fill
        className="object-contain"
        loading="eager"
      />
    </Link>
  );
}
