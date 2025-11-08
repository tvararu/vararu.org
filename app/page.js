"use client";

import Layout from "../components/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Theo Vararu's website";
  }, []);

  return (
    <Layout>
      <article>
        <ul>
          <li>
            Email: <a href="mailto:theo@vararu.org">theo@vararu.org</a>
          </li>
          <li>
            Blog: <a href="http://blog.vararu.org">blog.vararu.org</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/tvararu">@tvararu</a>
          </li>
          <li>
            X: <a href="https://x.com/NihilSineTheo">
              @NihilSinetheo
            </a>
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
}
