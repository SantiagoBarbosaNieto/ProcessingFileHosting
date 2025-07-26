function sketchProc(processing) {
  let x = 200; // Initial x position
  processing.setup = function() {
    // Use canvas dimensions (set by iFrame size)
    processing.size(processing.width, processing.height);
    processing.background(100);
  };
  processing.draw = function() {
    processing.background(255); // Clear canvas
    processing.fill(getRandomColor(processing));
    // Scale ellipse size relative to canvas width
    let ellipseSize = processing.width * 0.125; // 12.5% of canvas width
    processing.ellipse(x, processing.height / 2, ellipseSize, ellipseSize);
    x = (x + 1) % processing.width; // Move circle, wrap around
  };
}
