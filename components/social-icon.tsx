import Link from "next/link";
import Icon from "@/components/icon";

interface SocialIconProps {
  href: string;
  icon: "at" | "x" | "github" | "linkedin" | "instagram";
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
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={icon} className={className} />
    </Link>
  );
}
