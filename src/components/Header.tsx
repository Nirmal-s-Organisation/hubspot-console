import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border px-4 py-2">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="NuAgentOne"
          className="h-6 object-contain"
        />
        <div className="h-4 w-px bg-border" />
        <div>
          <h1 className="text-sm font-semibold text-foreground">Development Hub</h1>
        </div>
      </div>
    </header>
  );
};