function getRandomColor(processing) {
  return processing.color(
    processing.random(255),
    processing.random(255),
    processing.random(255)
  );
}