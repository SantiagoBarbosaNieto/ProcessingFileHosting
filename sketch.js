function sketchProc(processing) {
  let x = 200;
  processing.setup = function() {
    processing.size(400, 400);
    processing.background(255);
  };
  processing.draw = function() {
    processing.background(255); // Clear canvas
    processing.fill(getRandomColor(processing));
    processing.ellipse(x, 200, 50, 50);
    x = (x + 1) % 400; // Move circle right, wrap around
  };
}