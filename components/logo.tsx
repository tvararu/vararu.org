"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () =>
    requestAnimationFrame(() => setIsHovering(true));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`h-16 w-32 perspective-normal transform-3d ${
        !isHovering ? "transition-transform duration-150 ease-in-out" : ""
      }`}
      style={{
        transform: `rotate3d(-0.4, -1, 0, 25deg) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="presentation"
    >
      <Image
        src="/icon.svg"
        alt="Logo, outline of a pair of glasses between curly braces"
        className="absolute h-full w-full dark:translate-z-2.5"
        fill
        loading="eager"
      />
      <Image
        src="/icon.svg"
        alt=""
        className="absolute h-full w-full translate-z-2.5 invert
          dark:translate-z-0"
        fill
        loading="eager"
      />
    </div>
  );
}
