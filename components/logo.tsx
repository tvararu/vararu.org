export default function Logo() {
  return (
    <div
      className="h-full w-full transform-3d transform-[rotate3d(-0.4,-1,0,25deg)]"
      role="presentation"
    >
      <div className="h-full w-full absolute scale-[0.99]">
        <img src="/icon.svg" alt="vararu.org logo" className="w-full h-auto" />
      </div>
      <div className="h-full w-full absolute transform-[translateZ(10px)]">
        <img src="/icon.svg" alt="vararu.org logo" className="w-full h-auto brightness-0 invert" />
      </div>
    </div>
  );
}
