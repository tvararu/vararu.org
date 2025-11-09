import Link from "next/link";
import Image from "next/image";

interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
  className?: string;
}

export default function SocialIcon({
  href,
  icon,
  label,
  className = "h-5 w-5",
}: SocialIconProps) {
  return (
    <Link
      href={href}
      className={`relative dark:invert ${className}`}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt="" fill loading="eager" />
    </Link>
  );
}
