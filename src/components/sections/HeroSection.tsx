import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-mono text-neutral-300">
              EXPEDITION DRONE SYSTEM
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-100 tracking-tight">
              Adam
            </h1>
            <p className="text-2xl text-neutral-400 font-light">
              #1 Drone for Marine and Air Exploration
            </p>
          </div>

          <p className="text-lg text-neutral-300 leading-relaxed">
            A revolutionary dual-mode autonomous system engineered for seamless
            transitions between underwater submarine operations and aerial
            reconnaissance missions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-neutral-300">
                SUBMARINE MODE
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-neutral-300">
                AERIAL MODE
              </span>
            </div>
          </div>

          <div className="pt-6 text-sm text-neutral-500 font-mono">
            → Use arrow keys to explore specifications
          </div>
        </div>

        {/* Drone Visual Placeholder */}
        <div className="relative">
          <div className="aspect-square bg-neutral-800/30 border-2 border-neutral-700 border-dashed rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto border-4 border-neutral-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-neutral-600"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div className="text-neutral-600 font-mono text-sm">
                HERO DRONE RENDER
                <br />
                /public/drone/hero-render.png
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border border-neutral-800 rounded-full opacity-20" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-neutral-800 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  );
}
