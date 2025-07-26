function sketchProc(processing) {
  let x = 200;
  processing.setup = function() {
    // Set canvas size to match actual pixel dimensions
    processing.size(processing.width, processing.height);
    processing.background(255);
  };
  processing.draw = function() {
    processing.background(255);
    processing.fill(getRandomColor(processing));
    let ellipseSize = processing.width * 0.125; // 12.5% of canvas width
    processing.ellipse(x, processing.height / 2, ellipseSize, ellipseSize);
    x = (x + 1) % processing.width;
  };
  // Handle window resize
  processing.windowResized = function() {
    processing.size(processing.width, processing.height);
  };
}
