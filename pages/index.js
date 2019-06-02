import Link from "next/link";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <article>
      <h1>
        Theo is a JavaScript developer interested in accessibility, Node.js, and
        React.js.
      </h1>
      <ul>
        <li>
          Email: <a href="mailto:theo@vararu.org">theo@vararu.org</a>
        </li>
        <li>
          Blog: <a href="https://blog.vararu.org">blog.vararu.org</a>
        </li>
        <li>
          Résumé:{" "}
          <Link prefetch href="/cv/">
            <a>vararu.org/cv/</a>
          </Link>
        </li>
        <li>
          GitHub: <a href="https://github.com/tvararu">github.com/tvararu</a>
        </li>
        <li>
          Twitter: <a href="https://twitter.com/tvararu">twitter.com/tvararu</a>
        </li>
      </ul>
    </article>
    <style jsx>{`
      h1,
      ul {
        font-size: 1.25rem;
      }

      h1 {
        font-weight: normal;
        margin: 3rem 0;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin: 1rem 0;
      }

      @media (min-width: 30rem) {
        h1,
        ul {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </Layout>
);
