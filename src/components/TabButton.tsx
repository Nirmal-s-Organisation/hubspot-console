import { cn } from "@/lib/utils";

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const TabButton = ({ isActive, onClick, children, className }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 font-medium transition-all duration-200 relative",
        "border-b-2 border-transparent",
        "hover:text-primary hover:border-primary/30",
        isActive
          ? "text-primary border-primary bg-primary/5"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
    </button>
  );
};