import React from "react";

export function WhitepaperSection() {
  return (
    <div className="min-h-screen bg-neutral-900 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-mono text-neutral-400 mb-4">
            TECHNICAL WHITEPAPER
          </div>
          <h2 className="text-5xl font-bold text-neutral-100 mb-6">
            Adam: Dual-Mode Autonomous Exploration System
          </h2>
          <p className="text-neutral-500 font-mono text-sm">
            Published: 2025 | Version 1.0
          </p>
        </div>

        <div className="space-y-12 text-neutral-300 leading-relaxed">
          {/* Executive Summary */}
          <section>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Executive Summary
            </h3>
            <p className="mb-4">
              Adam represents a paradigm shift in autonomous exploration
              technology, seamlessly bridging the gap between aerial and marine
              reconnaissance. This whitepaper details the engineering principles,
              technical specifications, and operational capabilities of the
              world's first commercially viable dual-mode exploration drone.
            </p>
            <p>
              Through innovative propulsion design and advanced materials
              engineering, Adam achieves unprecedented versatility in
              environmental monitoring, research applications, and emergency
              response scenarios.
            </p>
          </section>

          {/* Dual-Mode Technology */}
          <section>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Dual-Mode Technology
            </h3>
            <p className="mb-4">
              The core innovation lies in Adam's transformable architecture. A
              proprietary retractable propulsion system allows rapid
              reconfiguration between aerial quadcopter mode and submarine
              thruster configuration within 3 seconds.
            </p>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-neutral-200 mb-3">
                Key Technologies:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500">•</span>
                  <span>
                    Hydraulic blade rotation mechanism with sealed bearings
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500">•</span>
                  <span>
                    Carbon fiber reinforced polymer hull (IP68 rated)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500">•</span>
                  <span>
                    Pressure-compensated electronics housing to 30 bar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500">•</span>
                  <span>
                    AI-powered mode detection and automatic transition
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Performance Metrics */}
          <section>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Performance Metrics
            </h3>
            <p className="mb-4">
              Extensive field testing across diverse environments validates
              Adam's operational reliability:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-4">
                <div className="font-mono text-xs text-neutral-500 mb-1">
                  AERIAL ENDURANCE
                </div>
                <div className="text-3xl font-bold text-neutral-100">
                  45 min
                </div>
              </div>
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-4">
                <div className="font-mono text-xs text-neutral-500 mb-1">
                  UNDERWATER ENDURANCE
                </div>
                <div className="text-3xl font-bold text-neutral-100">
                  90 min
                </div>
              </div>
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-4">
                <div className="font-mono text-xs text-neutral-500 mb-1">
                  MODE TRANSITION TIME
                </div>
                <div className="text-3xl font-bold text-neutral-100">
                  &lt; 3 sec
                </div>
              </div>
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-4">
                <div className="font-mono text-xs text-neutral-500 mb-1">
                  OPERATIONAL RANGE
                </div>
                <div className="text-3xl font-bold text-neutral-100">15 km</div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Use Cases & Applications
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-neutral-700 pl-4">
                <h4 className="font-semibold text-neutral-200 mb-2">
                  Marine Research
                </h4>
                <p className="text-neutral-400">
                  Coastal ecosystem monitoring, coral reef surveys, and marine
                  life documentation with minimal environmental impact.
                </p>
              </div>
              <div className="border-l-4 border-neutral-700 pl-4">
                <h4 className="font-semibold text-neutral-200 mb-2">
                  Search & Rescue
                </h4>
                <p className="text-neutral-400">
                  Rapid deployment for maritime emergencies, combining aerial
                  search patterns with underwater verification capabilities.
                </p>
              </div>
              <div className="border-l-4 border-neutral-700 pl-4">
                <h4 className="font-semibold text-neutral-200 mb-2">
                  Infrastructure Inspection
                </h4>
                <p className="text-neutral-400">
                  Bridge foundations, offshore platforms, and underwater
                  pipeline monitoring without specialized vessels.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
