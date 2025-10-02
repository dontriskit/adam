"use client";

import React, { useState, useEffect } from "react";

export function KeyboardHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleKeyPress = () => {
      setVisible(false);
    };

    window.addEventListener("keydown", handleKeyPress);

    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fade-in">
      <div className="bg-neutral-900/95 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-100 mb-2">
            Navigation Controls
          </h2>
          <p className="text-sm text-neutral-400">
            Use arrow keys to explore the Adam drone
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Arrow Keys */}
          <div className="grid grid-cols-3 gap-2">
            <div className="col-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm">
                ↑
              </div>
            </div>
            <div className="col-start-1">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm">
                ←
              </div>
            </div>
            <div className="col-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm">
                ↓
              </div>
            </div>
            <div className="col-start-3 row-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm">
                →
              </div>
            </div>
          </div>

          <div className="text-neutral-500 text-xl">or</div>

          {/* WASD Keys */}
          <div className="grid grid-cols-3 gap-2">
            <div className="col-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm font-bold">
                W
              </div>
            </div>
            <div className="col-start-1">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm font-bold">
                A
              </div>
            </div>
            <div className="col-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm font-bold">
                S
              </div>
            </div>
            <div className="col-start-3 row-start-2">
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded flex items-center justify-center text-neutral-300 font-mono text-sm font-bold">
                D
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
