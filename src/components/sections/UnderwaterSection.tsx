import React from "react";

export function UnderwaterSection() {
  const capabilities = [
    {
      title: "Deep Sea Exploration",
      description: "Dive to depths of 300m with pressure-resistant hull design",
      icon: "↓",
    },
    {
      title: "High-Resolution Sonar",
      description: "Advanced acoustic imaging for underwater mapping",
      icon: "〰",
    },
    {
      title: "Low-Light Camera",
      description: "4K imaging in complete darkness with LED array",
      icon: "○",
    },
    {
      title: "Autonomous Navigation",
      description: "AI-powered obstacle detection and path planning",
      icon: "⊙",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950/20 to-neutral-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square bg-neutral-800/30 border-2 border-blue-900/50 border-dashed rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto border-4 border-blue-900/50 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-blue-800"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </div>
                <div className="text-neutral-600 font-mono text-sm">
                  UNDERWATER MODE
                  <br />
                  /public/drone/underwater-mode.png
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-950/50 border border-blue-900/50 rounded-full text-xs font-mono text-blue-300 mb-4">
                SUBMARINE MODE
              </div>
              <h2 className="text-5xl font-bold text-neutral-100 mb-4">
                Underwater Capabilities
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Engineered for marine exploration, Adam transforms into a
                submersible drone capable of deep-sea reconnaissance and
                research missions.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-neutral-800/30 border border-neutral-700 rounded-lg hover:border-blue-900/50 transition-colors"
                >
                  <div className="text-3xl text-blue-400 w-12 h-12 flex items-center justify-center bg-blue-950/30 rounded-lg flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-1">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
