"use client";

import React from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import { positionsEqual, positionToKey } from "@/lib/navigation-utils";
import type { GridSection } from "@/types/navigation";

interface MiniMapProps {
  sections: GridSection[];
}

export function MiniMap({ sections }: MiniMapProps) {
  const { state, navigateToPosition, getExplorationProgress } = useNavigation();
  const progress = Math.round(getExplorationProgress());

  const gridSize = state.gridSize;

  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-lg p-4">
        {/* Progress */}
        <div className="mb-3 text-center">
          <div className="text-xs text-neutral-500 font-mono">EXPLORED</div>
          <div className="text-2xl font-bold text-neutral-200 font-mono">
            {progress}%
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: gridSize.rows }).map((_, row) =>
            Array.from({ length: gridSize.cols }).map((_, col) => {
              const position = { row, col };
              const section = sections.find((s) =>
                positionsEqual(s.position, position),
              );
              const isActive = positionsEqual(state.currentPosition, position);
              const isVisited = state.visitedSections.has(
                positionToKey(position),
              );

              if (!section) {
                return (
                  <div
                    key={`${row}-${col}`}
                    className="w-3 h-3 bg-neutral-900 rounded-sm"
                  />
                );
              }

              return (
                <button
                  key={section.id}
                  onClick={() => navigateToPosition(position)}
                  className={`
                    w-3 h-3 rounded-sm transition-all duration-200
                    ${isActive ? "bg-neutral-100 ring-2 ring-neutral-400" : ""}
                    ${!isActive && isVisited ? "bg-neutral-600 hover:bg-neutral-500" : ""}
                    ${!isActive && !isVisited ? "bg-neutral-800 hover:bg-neutral-700" : ""}
                  `}
                  title={section.title}
                  aria-label={`Navigate to ${section.title}`}
                />
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
