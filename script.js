let currentPlayer = 'X';
let player1, player2;
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById('submit').addEventListener('click', function() {
    player1 = document.getElementById('player-1').value || 'Player 1';
    player2 = document.getElementById('player-2').value || 'Player 2';
    
    document.getElementById('player-names').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    
    document.querySelector('.message').innerText = `${player1}, you're up!`;
});

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        const index = this.id - 1;

        if (board[index] !== '' || checkWinner()) return;

        board[index] = currentPlayer;
        this.innerText = currentPlayer;

        if (checkWinner()) {
            document.querySelector('.message').innerText = currentPlayer === 'X' ? `${player1} congratulations you won!` : `${player2} congratulations you won!`;
        } else if (board.every(cell => cell)) {
            document.querySelector('.message').innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.querySelector('.message').innerText = currentPlayer === 'X' ? `${player1}, you're up!` : `${player2}, you're up!`;
        }
    });
});

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}
describe('Tic Tac Toe Game', () => {
    it('Should find the input tag', () => {
        cy.visit('http://localhost:3000'); // Adjust URL as necessary
        cy.get('#player-1', { timeout: 10000 }).should('be.visible');
    });

    it('Shows player 1 win', () => {
        // Your test logic here
    });

    it('Shows player 2 win', () => {
        // Your test logic here
    });
});
