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
        "px-6 py-3 rounded-lg font-medium transition-all duration-300 relative",
        "border border-border hover:border-primary/50",
        "hover:bg-nav-hover hover:shadow-lg",
        isActive
          ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow"
          : "bg-card text-card-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      {isActive && (
        <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-20 animate-glow" />
      )}
    </button>
  );
};