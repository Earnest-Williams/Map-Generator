// Burgs feature removed - keeping stub for compatibility
declare global {
  var drawBurgIcons: () => void;
  var drawBurgIcon: (burg: any) => void;
  var removeBurgIcon: (burgId: number) => void;
}

const burgIconsRenderer = (): void => {
  // Stub - burgs feature removed
};

const drawBurgIconRenderer = (_burg: any): void => {
  // Stub - burgs feature removed
};

const removeBurgIconRenderer = (_burgId: number): void => {
  // Stub - burgs feature removed
};

window.drawBurgIcons = burgIconsRenderer;
window.drawBurgIcon = drawBurgIconRenderer;
window.removeBurgIcon = removeBurgIconRenderer;
