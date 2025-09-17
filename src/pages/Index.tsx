import { useState } from "react";
import { AppFrame } from "@/components/AppFrame";
import logo from "@/assets/logo.png";

type ActiveTab = "builder" | "automation";

const Index = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("builder");

  const tabs = [
    {
      id: "builder" as const,
      label: "NuAgentOne Builder",
      src: "http://localhost:8080/",
      description: "Development Builder Interface",
    },
    {
      id: "automation" as const,
      label: "NuAgentOne Automation Tool",
      src: "http://localhost:3000",
      description: "Automation & Workflow Management",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans flex flex-col">
      {/* Fixed Header */}
      <header className="shrink-0 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6 py-4 shadow-md relative z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NuAgentOne" className="h-9 object-contain" />
            {/* <div>
              <h1 className="text-lg font-semibold">Development Hub</h1>
              <p className="text-sm text-zinc-400">Builder & Automation Tools</p>
            </div> */}
          </div>

          {/* Tabs */}
          <nav className="flex items-center gap-1 ml-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors
                  ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* <div className="mt-2">
          <p className="text-sm text-zinc-400">{activeTabData?.description}</p>
        </div> */}
      </header>

      {/* Main Content takes remaining space */}
      <main className="flex-1 relative">
        {tabs.map((tab) => (
          <AppFrame
            key={tab.id}
            src={tab.src}
            title={tab.label}
            isActive={activeTab === tab.id}
          />
        ))}
      </main>
    </div>
  );
};

export default Index;
