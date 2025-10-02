import React from "react";

export function SpecsSection() {
  const specs = [
    { category: "Dimensions", value: "120cm × 80cm × 45cm" },
    { category: "Weight", value: "28.5 kg" },
    { category: "Max Depth", value: "300 meters" },
    { category: "Max Altitude", value: "1,500 meters" },
    { category: "Max Speed (Air)", value: "85 km/h" },
    { category: "Max Speed (Water)", value: "12 knots" },
    { category: "Battery Life (Air)", value: "45 minutes" },
    { category: "Battery Life (Water)", value: "90 minutes" },
    { category: "Operating Temp", value: "-10°C to 45°C" },
    { category: "Camera Resolution", value: "4K 60fps" },
    { category: "Sonar Range", value: "150 meters" },
    { category: "Communication", value: "RF + Acoustic" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Technical Specifications
          </h2>
          <p className="text-neutral-400 text-lg">
            Engineering excellence in every measurement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="text-sm font-mono text-neutral-500 mb-2">
                {spec.category}
              </div>
              <div className="text-2xl font-bold text-neutral-100">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-neutral-800/30 border border-neutral-700 rounded-xl">
          <h3 className="text-xl font-semibold text-neutral-200 mb-4">
            Performance Highlights
          </h3>
          <ul className="space-y-3 text-neutral-400">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Seamless mode transition in under 3 seconds</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                IP68 waterproof rating with reinforced carbon fiber hull
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                Advanced autonomous navigation with obstacle avoidance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Real-time HD video streaming with 200m range</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
