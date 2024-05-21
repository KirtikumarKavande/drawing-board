console.log("script attached");

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let path = [];
let redoPath = [];
let activeColor = "#000";
let activeTool = "pencilButton";
let activeWidth = 5;
let drawing = false;

function setupCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpi = window.devicePixelRatio;
  canvas.width = rect.width * dpi;
  canvas.height = rect.height * dpi;
}

setupCanvas();

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mouseup", upMouse);
  document.addEventListener("mousedown", downMouse);
  document.addEventListener("mousemove", moveMouse);

  const toolbar = document.getElementById("toolbar");

  document.getElementById("colorPicker").addEventListener("change", (e) => {
    activeColor = e.target.value;
  });
  document.getElementById("brushSize").addEventListener("change", (e) => {
    activeWidth = e.target.value;
    console.log(e.target.value);
  });
  toolbar.addEventListener("click", (event) => {
    if (activeTool) {
      document.getElementById(activeTool).classList.remove("active");
    }
    activeTool = event.target.id;
    const clickedTool = document.getElementById(event.target.id);
    clickedTool.classList.add("active");
  });
});
function upMouse() {
  drawing = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log(path)

//   path = [];
//   redoPath = [];
}

function downMouse(event) {

  if (activeTool === "pencilButton" || activeTool === "erasorButton") {
    console.log("loggeing")
    drawing = true;
    const pos = getMousePosition(event);
    console.log("fun",pos)
    if(pos.x>=0 && pos.y>=0){

        path.push({
            color: activeTool === "erasorButton" ? "white" : activeColor,
            width: activeWidth,
            position: [
              {
                x: pos.x,
                y: pos.y,
              },
            ],
          });
        }
    }

 
}

function moveMouse(event){

    if(drawing){
const pos=getMousePosition(event)

if(pos.x>=0 && pos.y>=0){
path[path.length-1].position.push({x:pos.x,y:pos.y})
}

    }
}

function getMousePosition(event) {
  const rect = canvas.getBoundingClientRect();
  const dpi = window.devicePixelRatio;
  return {
    x: (event.clientX - rect.left) * dpi,
    y: (event.clientY - rect.top) * dpi,
  };
}
