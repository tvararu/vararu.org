interface HeadingProps {
  children: React.ReactNode;
}

export function H1({ children }: HeadingProps) {
  return (
    <h1 className="mt-20 mb-5 text-2xl leading-relaxed font-semibold sm:text-3xl">
      {children}
    </h1>
  );
}

export function H2({ children }: HeadingProps) {
  return (
    <h2 className="mt-10 text-xl font-semibold sm:text-2xl">{children}</h2>
  );
}

export function H3({ children }: HeadingProps) {
  return <h3 className="mt-5 mb-3 font-semibold">{children}</h3>;
}
