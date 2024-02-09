let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let rows = 20;
let cols = 20;
let snake = [{ x: 19, y: 3 }];
let food = { x: 4, y: 5 };
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let direction = "LEFT";

setInterval(gameLoop, 500);
document.addEventListener("keydown", keyDown);

draw();
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  snake.forEach((part) => add(part.x, part.y));

  ctx.fillStyle = "yellow";
  add(food.x, food.y); // Food

  requestAnimationFrame(draw);
}

function add(x, y) {
  ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function gameLoop() {
  if (direction == "LEFT") {
    snake[0].x--;
  }
  if (direction == "RIGHT") {
    snake[0].x++;
  }
  if (direction == "UP") {
    snake[0].y--;
  }
  if (direction == "DOWN") {
    snake[0].y++;
  }
}

function keyDown(e) {
  if (e.keyCode == 37) {
    direction = "LEFT";
  }
  if (e.keyCode == 38) {
    direction = "UP";
  }
  if (e.keyCode == 39) {
    direction = "RIGHT";
  }
  if (e.keyCode == 40) {
    direction = "DOWN";
  }
}
