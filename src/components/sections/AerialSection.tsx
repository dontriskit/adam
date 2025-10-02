import React from "react";

export function AerialSection() {
  const capabilities = [
    {
      title: "High-Altitude Flight",
      description: "Reach altitudes up to 1,500m for aerial reconnaissance",
      icon: "↑",
    },
    {
      title: "Stabilized Gimbal",
      description: "3-axis mechanical stabilization for smooth 4K footage",
      icon: "⊕",
    },
    {
      title: "Intelligent Flight Modes",
      description: "Follow-me, waypoint navigation, and orbit modes",
      icon: "⟲",
    },
    {
      title: "Wind Resistance",
      description: "Stable flight in winds up to 45 km/h",
      icon: "⇄",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950/20 to-neutral-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-green-950/50 border border-green-900/50 rounded-full text-xs font-mono text-green-300 mb-4">
                AERIAL MODE
              </div>
              <h2 className="text-5xl font-bold text-neutral-100 mb-4">
                Aerial Capabilities
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Lightweight propulsion system enables swift aerial missions for
                reconnaissance, mapping, and environmental monitoring.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-neutral-800/30 border border-neutral-700 rounded-lg hover:border-green-900/50 transition-colors"
                >
                  <div className="text-3xl text-green-400 w-12 h-12 flex items-center justify-center bg-green-950/30 rounded-lg flex-shrink-0">
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

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-neutral-800/30 border-2 border-green-900/50 border-dashed rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto border-4 border-green-900/50 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-green-800"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
                <div className="text-neutral-600 font-mono text-sm">
                  AERIAL MODE
                  <br />
                  /public/drone/aerial-mode.png
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
