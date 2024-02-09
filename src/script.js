let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let rows = 10;
let cols = 10;
let snake = [
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
];
let food = { x: 5, y: 5 };
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let direction = "LEFT";

draw();
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  snake.forEach((part) => add(part.x, part.y));

  ctx.fillStyle = "yellow";
  add(food.x, food.y); // Food
}

function add(x, y) {
  ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function gameLoop() {}
