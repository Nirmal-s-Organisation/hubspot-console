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
      src: "http://localhost:8080/",
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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1" style={{ height: "calc(100vh - 60px)" }}>
        {/* App Frame Area */}
        <div className="flex-1 p-3">
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

        {/* Right Side Tab Navigation */}
        <div className="w-64 border-l border-border bg-card/50 backdrop-blur-sm p-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Tools</h3>
            
            {tabs.map((tab) => (
              <div key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-muted text-foreground"
                  }`}
                >
                  <div className="font-medium text-sm">{tab.label}</div>
                  <div className="text-xs opacity-80 mt-1">{tab.description}</div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
