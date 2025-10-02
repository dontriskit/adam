export type Direction = "up" | "down" | "left" | "right";

export interface Position {
  row: number;
  col: number;
}

export interface GridSection {
  id: string;
  position: Position;
  title: string;
  component: React.ComponentType;
  description?: string;
}

export interface NavigationState {
  currentPosition: Position;
  visitedSections: Set<string>;
  gridSize: { rows: number; cols: number };
}

export interface NavigationContextValue {
  state: NavigationState;
  navigate: (direction: Direction) => void;
  navigateToPosition: (position: Position) => void;
  canNavigate: (direction: Direction) => boolean;
  getAvailableDirections: () => Direction[];
  getSectionAtPosition: (position: Position) => GridSection | undefined;
  getCurrentSection: () => GridSection | undefined;
  getExplorationProgress: () => number;
}
