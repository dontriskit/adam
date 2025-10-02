import type { Direction, Position, GridSection } from "@/types/navigation";

export function getNextPosition(
  current: Position,
  direction: Direction,
  gridSize: { rows: number; cols: number },
): Position | null {
  const { row, col } = current;
  const { rows, cols } = gridSize;

  let newRow = row;
  let newCol = col;

  switch (direction) {
    case "up":
      newRow = row - 1;
      break;
    case "down":
      newRow = row + 1;
      break;
    case "left":
      newCol = col - 1;
      break;
    case "right":
      newCol = col + 1;
      break;
  }

  // Check bounds
  if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
    return null;
  }

  return { row: newRow, col: newCol };
}

export function positionsEqual(pos1: Position, pos2: Position): boolean {
  return pos1.row === pos2.row && pos1.col === pos2.col;
}

export function positionToKey(position: Position): string {
  return `${position.row}-${position.col}`;
}

export function positionToCoordinate(position: Position): string {
  const rows = ["N", "C", "S"]; // North, Center, South
  const cols = ["W", "C", "E"]; // West, Center, East
  return `${rows[position.row] ?? `R${position.row}`}${cols[position.col] ?? `C${position.col}`}`;
}

export function getSectionAtPosition(
  sections: GridSection[],
  position: Position,
): GridSection | undefined {
  return sections.find((section) =>
    positionsEqual(section.position, position),
  );
}

export function getAvailableDirections(
  current: Position,
  gridSize: { rows: number; cols: number },
  sections: GridSection[],
): Direction[] {
  const directions: Direction[] = [];

  const checkDirection = (dir: Direction) => {
    const nextPos = getNextPosition(current, dir, gridSize);
    if (nextPos && getSectionAtPosition(sections, nextPos)) {
      directions.push(dir);
    }
  };

  checkDirection("up");
  checkDirection("down");
  checkDirection("left");
  checkDirection("right");

  return directions;
}
