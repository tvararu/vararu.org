import { Component } from "react";
import SvgLogo from "./svg-logo";

const Logo = () => (
  <div className="wrapper" role="presentation">
    <style jsx>{`
      .wrapper {
        animation: mount 1.5s;
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

      @keyframes mount {
        0% {
          opacity: 0;
          transform: rotate3d(0, 0, 0, 0deg);
        }

        25% {
          opacity: 1;
        }

        35% {
          transform: rotate3d(-0.4, -1, 0, 35deg);
        }
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

export default Logo;
