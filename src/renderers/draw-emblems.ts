// Emblems feature removed - keeping stub for compatibility
declare global {
  var drawEmblems: () => void;
  var drawEmblem: (id: number, emblem: any) => void;
  var removeEmblem: (emblemId: number) => void;
}

const emblemsRenderer = (): void => {
  // Stub - emblems feature removed
};

const drawEmblemRenderer = (_id: number, _emblem: any): void => {
  // Stub - emblems feature removed
};

const removeEmblemRenderer = (_emblemId: number): void => {
  // Stub - emblems feature removed
};

window.drawEmblems = emblemsRenderer;
window.drawEmblem = drawEmblemRenderer;
window.removeEmblem = removeEmblemRenderer;
