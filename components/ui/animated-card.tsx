import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export function AnimatedCard({
  title,
  description,
  imageUrl,
  className,
}: AnimatedCardProps) {
  return (
    <div className="relative w-full group/card">
      <div className="relative inline-flex h-full w-full overflow-hidden rounded-md p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full backgroundImage flex flex-col justify-between p-4 m-[1px]",
            "bg-cover",
            className
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
