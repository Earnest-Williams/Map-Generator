// Burgs feature removed - keeping stub for compatibility
declare global {
  var drawBurgLabels: () => void;
  var drawBurgLabel: (burg: any) => void;
  var removeBurgLabel: (burgId: number) => void;
}

const burgLabelsRenderer = (): void => {
  // Stub - burgs feature removed
};

const drawBurgLabelRenderer = (_burg: any): void => {
  // Stub - burgs feature removed
};

const removeBurgLabelRenderer = (_burgId: number): void => {
  // Stub - burgs feature removed
};

window.drawBurgLabels = burgLabelsRenderer;
window.drawBurgLabel = drawBurgLabelRenderer;
window.removeBurgLabel = removeBurgLabelRenderer;
