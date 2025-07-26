window.onload = function() {
  try {
    var canvas = document.getElementById("myCanvas");
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    if (typeof Processing === "undefined") {
      console.error("Processing.js failed to load");
      return;
    }
    var processingInstance = new Processing(canvas, sketchProc);
    console.log("Processing.js sketch initialized");
  } catch (e) {
    console.error("Error initializing sketch: ", e);
  }
};