let message, input;

function setup() {
  createCanvas(2048, 1080);
  input = createFileInput(handleFile);
  input.position(0, 0);
}

function draw() {
  background('#f4f0e8');
  if (message) {
    text(message, 10, 30, width-20, height-60);
  }
}

function getPunctuation(t) {
  return t.replace(/[\w\d\s]*/gi, '  ');
}

function handleFile(file) {
  try {
    message = file.data.replace(/[\w\d\s]*/gi, ' ');
  } catch (ex) {
    message = 'Unable to load file.';
  }
}
