let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

draw();
function draw() {
  ctx.fillStyle = "lightsalmon";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "gray";
  add(100, 150);
  add(130, 150);
  add(160, 150);
  add(190, 150);
  add(220, 150);

  ctx.fillStyle = "lightgreen";
  add(290, 250);
}

function add(x, y) {
  ctx.fillRect(x, y, 30 - 1, 30 - 1);
}

function gameLoop() {}
