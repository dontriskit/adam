"use client";

import React from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import { positionsEqual } from "@/lib/navigation-utils";
import type { Position } from "@/types/navigation";

interface SectionProps {
  position: Position;
  children: React.ReactNode;
}

export function Section({ position, children }: SectionProps) {
  const { state } = useNavigation();
  const isActive = positionsEqual(state.currentPosition, position);

  return (
    <div
      className={`
        fixed inset-0 transition-all duration-500 ease-in-out
        ${isActive ? "opacity-100 translate-x-0 translate-y-0 z-10" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="h-screen w-screen overflow-y-auto overflow-x-hidden scrollable-content">
        {children}
      </div>
    </div>
  );
}
