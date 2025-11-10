interface OrganizationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function OrganizationLink({
  href,
  children,
}: OrganizationLinkProps) {
  return (
    <li
      className="border-b border-gray-200 font-sans text-base font-semibold
        dark:border-blue-400 dark:hover:border-blue-600"
    >
      <a
        href={href}
        className="-mt-px flex items-center justify-between p-4 text-blue-600
          hover:bg-blue-600 hover:text-white dark:text-blue-400
          dark:hover:bg-blue-600"
      >
        <span>{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}
