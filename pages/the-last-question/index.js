export default () => (
  <a
    href={
      typeof window !== "undefined"
        ? (window.location = "https://tvararu.github.io/the-last-question/")
        : "https://tvararu.github.io/the-last-question/"
    }
  >
    https://tvararu.github.io/the-last-question/
  </a>
);
