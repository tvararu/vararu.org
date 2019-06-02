import React from "react";
export default () => (
  <a
    href={
      typeof window !== "undefined"
        ? (window.location = "https://tvararu.github.io/pug/")
        : "https://tvararu.github.io/pug/"
    }
  >
    https://tvararu.github.io/pug/
  </a>
);
