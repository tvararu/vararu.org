interface ProjectCardProps {
  title: string;
  children: React.ReactNode;
  video?: string;
}

export default function ProjectCard({
  title,
  children,
  video,
}: ProjectCardProps) {
  return (
    <div
      className="mb-5 flex flex-col border border-gray-200 bg-white
        dark:border-white dark:bg-black"
    >
      <div
        className="relative aspect-square w-full bg-gray-200 dark:bg-gray-950"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="absolute right-0 bottom-0 left-0 bg-linear-to-t
            from-black/80 to-transparent p-4 pt-8"
        >
          <h3
            className="font-sans text-sm font-semibold text-white sm:text-base"
          >
            {title}
          </h3>
        </div>
      </div>

      <p className="p-4 text-sm leading-relaxed sm:text-base">{children}</p>
    </div>
  );
}
