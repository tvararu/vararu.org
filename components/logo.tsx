import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="h-16 w-32 transform-[rotate3d(-0.4,-1,0,25deg)]
        perspective-normal transform-3d"
      role="presentation"
    >
      <Image
        src="/icon.svg"
        alt="Logo, outline of a pair of glasses between curly braces"
        className="absolute h-full w-full"
        fill
        loading="eager"
      />
      <Image
        src="/icon.svg"
        alt=""
        className="absolute h-full w-full translate-z-2.5 invert"
        fill
        loading="eager"
      />
    </div>
  );
}
