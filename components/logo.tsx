"use client";

import SvgLogo from "./svg-logo";

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
          color: #fff;
          transform: translateZ(10px);
        }
      `}</style>
      <div className="background">
        <SvgLogo />
      </div>
      <div className="foreground">
        <SvgLogo />
      </div>
    </div>
  );
}
