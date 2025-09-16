import { cn } from "@/lib/utils";

interface AppFrameProps {
  src: string;
  title: string;
  isActive: boolean;
  className?: string;
}

export const AppFrame = ({ src, title, isActive, className }: AppFrameProps) => {
  return (
    <div
      className={cn(
        "w-full h-full transition-opacity duration-300 ease-in-out",
        isActive ? "opacity-100" : "opacity-0 pointer-events-none",
        "absolute inset-0",
        className
      )}
    >
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0 rounded-lg shadow-2xl"
        loading="lazy"
        allow="clipboard-read; clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};