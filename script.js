var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var snake = [{x: 10, y: 10}];
var direction = "right";
var food = {x: 0, y: 0};

function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(function(segment) {
    ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
  });
}

function moveSnake() {
  var head = snake[0];
  if (direction == "right") {
    var newHead = {x: head.x + 1, y: head.y};
  } else if (direction == "left") {
    var newHead = {x: head.x - 1, y: head.y};
  } else if (direction == "up") {
    var newHead = {x: head.x, y: head.y - 1};
  } else if (direction == "down") {
    var newHead = {x: head.x, y: head.y + 1};
  }
  snake.unshift(newHead);
  if (newHead.x == food.x && newHead.y == food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

function generateFood() {
  var x = Math.floor(Math.random() * 40);
  var y = Math.floor(Math.random() * 40);
  food = {x: x, y: y};
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
}

function checkCollision() {
  var head = snake[0];
  if (head.x < 0 || head.x >= 40 || head.y < 0 || head.y >= 40) {
    return true;
  }
  for (var i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      return true;
    }
  }
  return false;
}

function gameLoop() {
  moveSnake();
  if (checkCollision()) {
    clearInterval(intervalId);
    alert("Game Over!");
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
  }
}

generateFood();
var intervalId = setInterval(gameLoop, 100);

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37 && direction != "right") {
    direction = "left";
  } else if (event.keyCode == 38 && direction != "down") {
    direction = "up";
  } else if (event.keyCode == 39 && direction != "left") {
    direction = "right";
  } else if (event.keyCode == 40 && direction != "up") {
    direction = "down";
  }
});
