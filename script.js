let started = false;
let gameOver = false;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
function resetGame() {
  bird.y = 200;
  bird.velocity = 0;

  pipes = [];
  score = 0;
  frame = 0;

  gameOver = false;
  started = false;
}
