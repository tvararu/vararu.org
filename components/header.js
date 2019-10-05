import Link from "next/link";
import Logo from "./logo";
import NoSSR from "react-no-ssr";

export default () => (
  <header>
    <p>
      theodor
      <br />
      <Link href="/">
        <a>vararu.org</a>
      </Link>
    </p>
    <NoSSR>
      <div className="logo">
        <Logo />
      </div>
    </NoSSR>
    <style jsx>{`
      header,
      .logo {
        height: 4rem;
        font-weight: bold;
      }

      header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
      }

      p,
      a {
        color: currentColor;
        font-size: 1.25rem;
      }

      .logo {
        perspective-origin: 50% 50%;
        perspective: 512px;
        width: 8rem;
      }

      @media (min-width: 30rem) {
        header,
        .logo {
          height: 5rem;
        }

        p,
        a {
          font-size: 1.5rem;
        }

        .logo {
          width: 10rem;
        }
      }

      @media print {
        header {
          display: none;
        }
      }
    `}</style>
  </header>
);
