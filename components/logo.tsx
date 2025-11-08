"use client";

export default function Logo() {
  return (
    <div className="wrapper" role="presentation">
      <style jsx>{`
        .wrapper {
          height: 100%;
          transform-style: preserve-3d;
          transform: rotate3d(-0.4, -1, 0, 25deg);
          width: 100%;
        }

        .background,
        .foreground {
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .background {
          transform: scale(0.99);
        }

        .foreground {
          transform: translateZ(10px);
        }

        .foreground img {
          filter: brightness(0) invert(1);
        }

        img {
          width: 100%;
          height: auto;
        }
      `}</style>
      <div className="background">
        <img src="/icon.svg" alt="vararu.org logo" />
      </div>
      <div className="foreground">
        <img src="/icon.svg" alt="vararu.org logo" />
      </div>
    </div>
  );
}
