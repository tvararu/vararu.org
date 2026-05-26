interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="-mx-1 bg-blue-600/5 p-1 text-blue-600 hover:bg-blue-600
        hover:text-white dark:bg-blue-600/15 dark:text-blue-400
        dark:hover:bg-blue-600"
    >
      {children}
    </a>
  );
}
