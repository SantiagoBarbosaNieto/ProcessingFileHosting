function sketchProc(processing) {
  let x = 200;
  processing.setup = function() {
    // Set canvas size to match actual pixel dimensions
    processing.size(1000, 3000);
    processing.background(255);
  };
  processing.draw = function() {
    processing.background(255);
    processing.fill(getRandomColor(processing));
    let ellipseSize = processing.width * 0.325; // 12.5% of canvas width
    processing.ellipse(x, processing.height / 2, ellipseSize, ellipseSize);
    x = (x + 1) % processing.width;
  };
}
