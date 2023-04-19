var board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: onDrop
});

var engine = new Worker('stockfish.js');

function onDrop(source, target) {
  var move = board.move({from: source, to: target});
  if (move === null) {
    return 'snapback';
  }
  if (board.game_over()) {
    alert("Game over");
    return;
  }
  engine.postMessage('position fen ' + board.fen());
  engine.postMessage('go depth 3');
}

engine.onmessage = function(event) {
  var match = event.data.match(/bestmove ([a-h][1-8])([a-h][1-8])/);
  if (match) {
    var source = match[1];
    var target = match[2];
    board.move(source + '-' + target);
    if (board.game_over()) {
      alert("Game over");
      return;
    }
  }
};

engine.postMessage('uci');
engine.postMessage('ucinewgame');
engine.postMessage('position startpos');
