import React from "react";

export function TechDetailsSection() {
  return (
    <div className="min-h-screen bg-neutral-900 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Engineering Details
          </h2>
          <p className="text-neutral-400 text-lg">
            Deep dive into the technology powering Adam
          </p>
        </div>

        <div className="space-y-8">
          {/* Propulsion System */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Dual-Mode Propulsion System
            </h3>
            <div className="space-y-3 text-neutral-300">
              <p>
                <span className="font-semibold text-neutral-200">
                  Aerial Mode:
                </span>{" "}
                4× brushless DC motors (2,400 KV) with carbon fiber propellers
                (15-inch diameter)
              </p>
              <p>
                <span className="font-semibold text-neutral-200">
                  Underwater Mode:
                </span>{" "}
                Vectored thruster configuration with sealed magnetic couplings
              </p>
              <p>
                <span className="font-semibold text-neutral-200">
                  Transition Mechanism:
                </span>{" "}
                Hydraulic servo system actuates propeller pitch and orientation
                changes
              </p>
            </div>
          </div>

          {/* Power System */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Power & Battery System
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <div className="text-xs font-mono text-neutral-500 mb-1">
                  BATTERY TYPE
                </div>
                <div className="text-neutral-200">
                  LiPo 6S 22,000mAh (22.2V)
                </div>
              </div>
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <div className="text-xs font-mono text-neutral-500 mb-1">
                  CHARGING TIME
                </div>
                <div className="text-neutral-200">65 minutes (fast charge)</div>
              </div>
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <div className="text-xs font-mono text-neutral-500 mb-1">
                  POWER MANAGEMENT
                </div>
                <div className="text-neutral-200">Intelligent BMS with redundancy</div>
              </div>
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <div className="text-xs font-mono text-neutral-500 mb-1">
                  EMERGENCY POWER
                </div>
                <div className="text-neutral-200">10min reserve capacity</div>
              </div>
            </div>
          </div>

          {/* Navigation & Control */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Navigation & Control Systems
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-1">•</span>
                <span>
                  <span className="font-semibold text-neutral-200">
                    Flight Controller:
                  </span>{" "}
                  Custom ARM Cortex-M7 processor (400 MHz)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-1">•</span>
                <span>
                  <span className="font-semibold text-neutral-200">IMU:</span>{" "}
                  9-axis gyroscope/accelerometer/magnetometer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-1">•</span>
                <span>
                  <span className="font-semibold text-neutral-200">GPS:</span>{" "}
                  Dual-band RTK with centimeter-level accuracy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-1">•</span>
                <span>
                  <span className="font-semibold text-neutral-200">
                    Underwater Nav:
                  </span>{" "}
                  Doppler Velocity Log (DVL) + inertial dead reckoning
                </span>
              </li>
            </ul>
          </div>

          {/* Sensors & Imaging */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Sensors & Imaging Payload
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-2">Visual</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• 4K 60fps main camera (Sony IMX577)</li>
                  <li>• Thermal imaging (FLIR Boson 640)</li>
                  <li>• Low-light enhancement (f/1.8 aperture)</li>
                  <li>• 3-axis mechanical gimbal stabilization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-2">
                  Environmental
                </h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Temperature (-20°C to 60°C range)</li>
                  <li>• Pressure/depth sensor (0-30 bar)</li>
                  <li>• Water quality sensors (pH, turbidity)</li>
                  <li>• LiDAR for terrain mapping (50m range)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials & Construction */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Materials & Construction
            </h3>
            <div className="space-y-3 text-neutral-300">
              <p>
                <span className="font-semibold text-neutral-200">Hull:</span>{" "}
                Carbon fiber reinforced polymer (CFRP) monocoque with titanium
                reinforcements
              </p>
              <p>
                <span className="font-semibold text-neutral-200">Seals:</span>{" "}
                Double O-ring system with redundant pressure compensation
              </p>
              <p>
                <span className="font-semibold text-neutral-200">
                  Corrosion Protection:
                </span>{" "}
                Anodized aluminum components with marine-grade stainless steel
                fasteners
              </p>
              <p>
                <span className="font-semibold text-neutral-200">
                  Weight Distribution:
                </span>{" "}
                Active ballast system for neutral buoyancy adjustment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
