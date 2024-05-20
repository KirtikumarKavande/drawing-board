console.log("script attached");

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
console.log("ctx", ctx);
const path = [];
const redoPath = [];

let activeTool = "pencilButton";
let drawing = false;
function setupCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpi = window.devicePixelRatio;
  canvas.width = rect.width * dpi;
  canvas.height = rect.height * dpi;
  console.log("canvas", canvas);
}

setupCanvas();

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousedown", downMouse);

  const toolbar = document.getElementById("toolbar");
  toolbar.addEventListener("click", (event) => {
    if (activeTool) {
      document.getElementById(activeTool).classList.remove("active");
    }
    activeTool = event.target.id;
    const clickedTool = document.getElementById(event.target.id);
    clickedTool.classList.add("active");
  });
});
function downMouse() {
  drawing = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  path = [];
  redoPath = [];
}
