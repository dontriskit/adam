import React from "react";

export function CapabilitiesSection() {
  const features = [
    {
      title: "Autonomous Operation",
      description: "AI-powered flight planning and obstacle avoidance",
      stat: "99.8%",
      label: "Success Rate",
    },
    {
      title: "Real-Time Streaming",
      description: "4K video transmission with minimal latency",
      stat: "< 80ms",
      label: "Latency",
    },
    {
      title: "Environmental Sensors",
      description: "Temperature, pressure, salinity, and pollution monitoring",
      stat: "12+",
      label: "Sensor Types",
    },
    {
      title: "Rapid Deployment",
      description: "Mission-ready in minutes with quick-change payload system",
      stat: "< 5min",
      label: "Setup Time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neutral-100 mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-neutral-400 text-xl">
            Engineered for versatility, built for reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 hover:border-neutral-600 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-neutral-100">
                  {feature.title}
                </h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neutral-200">
                    {feature.stat}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {feature.label}
                  </div>
                </div>
              </div>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mode Comparison */}
        <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-neutral-100 mb-6 text-center">
            Mode Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-neutral-400 font-medium">
                    Capability
                  </th>
                  <th className="text-center py-3 px-4 text-blue-400 font-medium">
                    Underwater
                  </th>
                  <th className="text-center py-3 px-4 text-green-400 font-medium">
                    Aerial
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">Max Speed</td>
                  <td className="text-center py-3 px-4 font-mono">12 knots</td>
                  <td className="text-center py-3 px-4 font-mono">85 km/h</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">Endurance</td>
                  <td className="text-center py-3 px-4 font-mono">90 min</td>
                  <td className="text-center py-3 px-4 font-mono">45 min</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">Range</td>
                  <td className="text-center py-3 px-4 font-mono">8 km</td>
                  <td className="text-center py-3 px-4 font-mono">15 km</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">Max Depth/Altitude</td>
                  <td className="text-center py-3 px-4 font-mono">300 m</td>
                  <td className="text-center py-3 px-4 font-mono">1,500 m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Primary Sensors</td>
                  <td className="text-center py-3 px-4 text-sm">
                    Sonar, Camera
                  </td>
                  <td className="text-center py-3 px-4 text-sm">
                    GPS, LiDAR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
