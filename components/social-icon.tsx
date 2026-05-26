import Icon, { type IconName } from "@/components/icon";

interface SocialIconProps {
  href: string;
  icon: IconName;
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
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={icon} className={className} />
    </a>
  );
}
