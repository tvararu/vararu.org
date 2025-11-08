import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="h-full w-full transform-[rotate3d(-0.4,-1,0,25deg)] transform-3d"
      role="presentation"
    >
      <div className="absolute h-full w-full scale-[0.99]">
        <Image
          src="/icon.svg"
          alt="vararu.org logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute h-full w-full transform-[translateZ(10px)]">
        <Image
          src="/icon.svg"
          alt="vararu.org logo"
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
    </div>
  );
}
