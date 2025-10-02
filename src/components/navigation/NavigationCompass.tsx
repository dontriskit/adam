"use client";

import React from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import { positionToCoordinate } from "@/lib/navigation-utils";

export function NavigationCompass() {
  const { state, canNavigate } = useNavigation();
  const coordinate = positionToCoordinate(state.currentPosition);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-lg p-4">
        {/* Coordinate Display */}
        <div className="text-center mb-3">
          <div className="text-xs text-neutral-500 font-mono">COORDINATES</div>
          <div className="text-lg font-bold text-neutral-200 font-mono">
            {coordinate}
          </div>
        </div>

        {/* Compass */}
        <div className="relative w-24 h-24">
          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-neutral-600 rounded-full" />
          </div>

          {/* Up Arrow */}
          <button
            onClick={() => canNavigate("up") && null}
            disabled={!canNavigate("up")}
            className={`
              absolute top-0 left-1/2 -translate-x-1/2
              w-8 h-8 flex items-center justify-center
              transition-all duration-200
              ${
                canNavigate("up")
                  ? "text-neutral-300 hover:text-neutral-100 cursor-pointer"
                  : "text-neutral-700 cursor-not-allowed"
              }
            `}
            aria-label="Navigate up"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {/* Down Arrow */}
          <button
            onClick={() => canNavigate("down") && null}
            disabled={!canNavigate("down")}
            className={`
              absolute bottom-0 left-1/2 -translate-x-1/2
              w-8 h-8 flex items-center justify-center
              transition-all duration-200
              ${
                canNavigate("down")
                  ? "text-neutral-300 hover:text-neutral-100 cursor-pointer"
                  : "text-neutral-700 cursor-not-allowed"
              }
            `}
            aria-label="Navigate down"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => canNavigate("left") && null}
            disabled={!canNavigate("left")}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2
              w-8 h-8 flex items-center justify-center
              transition-all duration-200
              ${
                canNavigate("left")
                  ? "text-neutral-300 hover:text-neutral-100 cursor-pointer"
                  : "text-neutral-700 cursor-not-allowed"
              }
            `}
            aria-label="Navigate left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => canNavigate("right") && null}
            disabled={!canNavigate("right")}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2
              w-8 h-8 flex items-center justify-center
              transition-all duration-200
              ${
                canNavigate("right")
                  ? "text-neutral-300 hover:text-neutral-100 cursor-pointer"
                  : "text-neutral-700 cursor-not-allowed"
              }
            `}
            aria-label="Navigate right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
