const puzzleBoard = document.getElementById('puzzle-board');
const puzzlePieces = puzzleBoard.querySelectorAll('.puzzle-piece');

puzzlePieces.forEach((piece)) => {
  piece.addEventListener('click', () => {
    // Check if the piece is in the correct position
    const correctPosition = parseInt(piece.innerHTML, 10);
    const currentPosition = Array.from(puzzlePieces).indexOf(piece);
  }
    if (correctPosition === currentPosition) {
      // The piece is in the correct position, so do nothing
      return;
    }

    // The piece is not in the correct position, so swap it with the piece in the correct position
    const correctPiece = puzzlePieces[correctPosition];
    piece.innerHTML = correctPiece.innerHTML;
    correctPiece.}