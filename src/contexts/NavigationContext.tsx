"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from "react";
import type {
  Direction,
  Position,
  GridSection,
  NavigationState,
  NavigationContextValue,
} from "@/types/navigation";
import {
  getNextPosition,
  getSectionAtPosition,
  getAvailableDirections,
  positionToKey,
} from "@/lib/navigation-utils";

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined,
);

interface NavigationProviderProps {
  children: React.ReactNode;
  sections: GridSection[];
  gridSize: { rows: number; cols: number };
  initialPosition?: Position;
}

export function NavigationProvider({
  children,
  sections,
  gridSize,
  initialPosition = { row: 0, col: 0 },
}: NavigationProviderProps) {
  const [state, setState] = useState<NavigationState>({
    currentPosition: initialPosition,
    visitedSections: new Set([positionToKey(initialPosition)]),
    gridSize,
  });

  const navigate = useCallback(
    (direction: Direction) => {
      const nextPosition = getNextPosition(
        state.currentPosition,
        direction,
        gridSize,
      );

      if (
        nextPosition &&
        getSectionAtPosition(sections, nextPosition)
      ) {
        setState((prev) => ({
          ...prev,
          currentPosition: nextPosition,
          visitedSections: new Set([
            ...prev.visitedSections,
            positionToKey(nextPosition),
          ]),
        }));
      }
    },
    [state.currentPosition, gridSize, sections],
  );

  const navigateToPosition = useCallback(
    (position: Position) => {
      if (getSectionAtPosition(sections, position)) {
        setState((prev) => ({
          ...prev,
          currentPosition: position,
          visitedSections: new Set([
            ...prev.visitedSections,
            positionToKey(position),
          ]),
        }));
      }
    },
    [sections],
  );

  const canNavigate = useCallback(
    (direction: Direction): boolean => {
      const nextPosition = getNextPosition(
        state.currentPosition,
        direction,
        gridSize,
      );
      return (
        nextPosition !== null &&
        getSectionAtPosition(sections, nextPosition) !== undefined
      );
    },
    [state.currentPosition, gridSize, sections],
  );

  const getAvailableDirectionsFn = useCallback(() => {
    return getAvailableDirections(state.currentPosition, gridSize, sections);
  }, [state.currentPosition, gridSize, sections]);

  const getSectionAtPositionFn = useCallback(
    (position: Position) => {
      return getSectionAtPosition(sections, position);
    },
    [sections],
  );

  const getCurrentSection = useCallback(() => {
    return getSectionAtPosition(sections, state.currentPosition);
  }, [sections, state.currentPosition]);

  const getExplorationProgress = useCallback(() => {
    return (state.visitedSections.size / sections.length) * 100;
  }, [state.visitedSections, sections.length]);

  const value = useMemo<NavigationContextValue>(
    () => ({
      state,
      navigate,
      navigateToPosition,
      canNavigate,
      getAvailableDirections: getAvailableDirectionsFn,
      getSectionAtPosition: getSectionAtPositionFn,
      getCurrentSection,
      getExplorationProgress,
    }),
    [
      state,
      navigate,
      navigateToPosition,
      canNavigate,
      getAvailableDirectionsFn,
      getSectionAtPositionFn,
      getCurrentSection,
      getExplorationProgress,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
