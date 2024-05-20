console.log("script attached");

const canvas = document.getElementById("drawingCanvas");
let activeTool = "pencilButton";

function setupCanvas() {
  const react = canvas.getBoundingClientRect();
  const dpi = window.devicePixelRatio;
  canvas.width = react.width * dpi;
  canvas.height = react.height * dpi;
  console.log("canvas", canvas);
}

setupCanvas();

document.addEventListener("DOMContentLoaded", () => {
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
