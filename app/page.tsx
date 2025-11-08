export default function Home() {
  return (
    <article>
      <ul className="text-xl sm:text-2xl list-none p-0">
        <li className="my-4">
          Email:{" "}
          <a href="mailto:theo@vararu.org" className="underline">
            theo@vararu.org
          </a>
        </li>
        <li className="my-4">
          Blog:{" "}
          <a href="http://blog.vararu.org" className="underline">
            blog.vararu.org
          </a>
        </li>
        <li className="my-4">
          GitHub:{" "}
          <a href="https://github.com/tvararu" className="underline">
            @tvararu
          </a>
        </li>
        <li className="my-4">
          X:{" "}
          <a href="https://x.com/NihilSineTheo" className="underline">
            @NihilSinetheo
          </a>
        </li>
      </ul>
    </article>
  );
}
