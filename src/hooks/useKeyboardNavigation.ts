"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import type { Direction } from "@/types/navigation";

const keyToDirection: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  w: "up",
  s: "down",
  a: "left",
  d: "right",
  W: "up",
  S: "down",
  A: "left",
  D: "right",
};

export function useKeyboardNavigation(enabled = true) {
  const { navigate, canNavigate } = useNavigation();

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = keyToDirection[event.key];

      if (direction) {
        // Prevent default scroll behavior for arrow keys
        event.preventDefault();

        // Only navigate if the direction is available
        if (canNavigate(direction)) {
          navigate(direction);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, navigate, canNavigate]);
}
