import { useState } from "react";
import { Header } from "@/components/Header";
import { TabButton } from "@/components/TabButton";
import { AppFrame } from "@/components/AppFrame";

type ActiveTab = "builder" | "automation";

const Index = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("builder");

  const tabs = [
    {
      id: "builder" as const,
      label: "Builder",
      src: "http://localhost:8080",
      description: "Development Builder Interface"
    },
    {
      id: "automation" as const,
      label: "Automation Tool",
      src: "http://localhost:3001",
      description: "Automation & Workflow Management"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Tab Navigation */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="px-6">
          <div className="flex items-end">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
          
          {/* Active tab description */}
          <div className="pb-4 pt-2">
            <p className="text-sm text-muted-foreground transition-all duration-200">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* App Content Area */}
      <div className="relative flex-1 p-6" style={{ height: "calc(100vh - 180px)" }}>
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-border shadow-2xl">
          {tabs.map((tab) => (
            <AppFrame
              key={tab.id}
              src={tab.src}
              title={tab.label}
              isActive={activeTab === tab.id}
            />
          ))}
          
          {/* Loading overlay */}
          <div className="absolute inset-0 bg-muted/20 backdrop-blur-sm flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span>Loading application...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
