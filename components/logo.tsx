import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="h-full w-full transform-3d
                 transform-[rotate3d(-0.4,-1,0,25deg)]"
      role="presentation"
    >
      <div className="h-full w-full absolute scale-[0.99]">
        <Image
          src="/icon.svg"
          alt="vararu.org logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-full w-full absolute transform-[translateZ(10px)]">
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
