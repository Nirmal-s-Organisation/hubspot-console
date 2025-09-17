import logo from "@/assets/logo.png";

export const Header = () => {
  
  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border px-6 py-4">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="NuAgentOne"
          className="h-8 object-contain"
        />
        <div className="h-6 w-px bg-border" />
        <div>
          <h1 className="text-lg font-semibold text-foreground">Development Hub</h1>
          <p className="text-sm text-muted-foreground">Builder & Automation Tools</p>
        </div>
      </div>
    </header>
  );
};