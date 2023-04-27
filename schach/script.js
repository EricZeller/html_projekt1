var board = document.getElementById("board");

var pieces = {
  'r': '♜',
  'n': '♞',
  'b': '♝',
  'q': '♛',
  'k': '♚',
  'p': '♟',
  'R': '♖',
  'N': '♘',
  'B': '♗',
  'Q': '♕',
  'K': '♔',
  'P': '♙'
};

var position = [  'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',  'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',  'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

function drawBoard() {
  for (var i = 0; i < 64; i++) {
    var square = document.createElement("div");
    square.className = "square " + ((i + Math.floor(i / 8)) % 2 ? "white" : "black");
    square.id = i;
    square.innerHTML = position[i] !== '' ? pieces[position[i]] : '';
    square.onclick = function() {
      movePiece(this);
    };
    board.appendChild(square);
  }
}

function movePiece(square) {
  var selectedSquare = document.getElementsByClassName("selected")[0];
  if (selectedSquare) {
    if (square == selectedSquare) {
      square.classList.remove("selected");
    } else if (square.innerHTML != "") {
      if (square.classList.contains("piece") && square.innerHTML != selectedSquare.innerHTML) {
        return;
      }
      selectedSquare.innerHTML = square.innerHTML;
      square.innerHTML = "";
    } else {
      selectedSquare.innerHTML = " ";
      square.innerHTML = pieces[selectedSquare.innerHTML];
    }
    selectedSquare.classList.remove("selected");
  } else if (square.innerHTML != "") {
    square.classList.add("selected");
  }
}



window.onload = function() {
  drawBoard();
};
