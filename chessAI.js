function move(board, color) {
    debugger
    let myBoard = clone(board, color);
    let ai = Dicision(myBoard);
    return ai;
}
const PAWN_MG_PST = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-6, -4, 1, 1, 1, 1, -4, -6],
    [-6, -4, 1, 2, 2, 1, -4, -6],
    [-6, -4, 2, 8, 8, 2, -4, -6],
    [-6, -4, 5, 10, 10, 5, -4, -6],
    [-4, -4, 1, 5, 5, 1, -4, -4],
    [-6, -4, 1, -24, -24, 1, -4, -6],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

const PAWN_EG_PST = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-6, -4, 1, 1, 1, 1, -4, -6],
    [-6, -4, 1, 2, 2, 1, -4, -6],
    [-6, -4, 2, 8, 8, 2, -4, -6],
    [-6, -4, 5, 10, 10, 5, -4, -6],
    [-4, -4, 1, 5, 5, 1, -4, -4],
    [-6, -4, 1, -24, -24, 1, -4, -6],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

const KNIGHT_MG_PST = [
    [-8, -8, -8, -8, -8, -8, -8, -8],
    [-8, 0, 0, 0, 0, 0, 0, -8],
    [-8, 0, 4, 6, 6, 4, 0, -8],
    [-8, 0, 6, 8, 8, 6, 0, -8],
    [-8, 0, 6, 8, 8, 6, 0, -8],
    [-8, 0, 4, 6, 6, 4, 0, -8],
    [-8, 0, 1, 2, 2, 1, 0, -8],
    [-16, -12, -8, -8, -8, -8, -12, -16]
];

const KNIGHT_EG_PST = [
    [-8, -8, -8, -8, -8, -8, -8, -8],
    [-8, 0, 0, 0, 0, 0, 0, -8],
    [-8, 0, 4, 6, 6, 4, 0, -8],
    [-8, 0, 6, 8, 8, 6, 0, -8],
    [-8, 0, 6, 8, 8, 6, 0, -8],
    [-8, 0, 4, 6, 6, 4, 0, -8],
    [-8, 0, 1, 2, 2, 1, 0, -8],
    [-16, -12, -8, -8, -8, -8, -12, -16]
];

const BISHOP_MG_PST = [
    [-4, -4, -4, -4, -4, -4, -4, -4],
    [-4, 0, 0, 0, 0, 0, 0, -4],
    [-4, 0, 2, 4, 4, 2, 0, -4],
    [-4, 0, 4, 6, 6, 4, 0, -4],
    [-4, 0, 4, 6, 6, 4, 0, -4],
    [-4, 1, 2, 4, 4, 2, 1, -4],
    [-4, 2, 1, 1, 1, 1, 2, -4],
    [-4, -4, -12, -4, -4, -12, -4, -4]
];

const BISHOP_EG_PST = [
    [-4, -4, -4, -4, -4, -4, -4, -4],
    [-4, 0, 0, 0, 0, 0, 0, -4],
    [-4, 0, 2, 4, 4, 2, 0, -4],
    [-4, 0, 4, 6, 6, 4, 0, -4],
    [-4, 0, 4, 6, 6, 4, 0, -4],
    [-4, 1, 2, 4, 4, 2, 1, -4],
    [-4, 2, 1, 1, 1, 1, 2, -4],
    [-4, -4, -12, -4, -4, -12, -4, -4]
];

const ROOK_MG_PST = [
    [5, 5, 5, 5, 5, 5, 5, 5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [0, 0, 0, 2, 2, 0, 0, 0]
];

const ROOK_EG_PST = [
    [5, 5, 5, 5, 5, 5, 5, 5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [0, 0, 0, 2, 2, 0, 0, 0]
];

const QUEEN_MG_PST = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 1, 0, 0],
    [0, 0, 2, 3, 3, 2, 0, 0],
    [0, 0, 2, 3, 3, 2, 0, 0],
    [0, 0, 1, 2, 2, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [-5, -5, -5, -5, -5, -5, -5, -5]
];

const QUEEN_EG_PST = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 1, 0, 0],
    [0, 0, 2, 3, 3, 2, 0, 0],
    [0, 0, 2, 3, 3, 2, 0, 0],
    [0, 0, 1, 2, 2, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [-5, -5, -5, -5, -5, -5, -5, -5]
];

const KING_MG_PST = [
    [-40, -30, -50, -70, -70, -50, -30, -40],
    [-30, -20, -40, -60, -60, -40, -20, -30],
    [-20, -10, -30, -50, -50, -30, -10, -20],
    [-10, 0, -20, -40, -40, -20, 0, -10],
    [0, 10, -10, -30, -30, -10, 10, 0],
    [10, 20, 0, -20, -20, 0, 20, 10],
    [30, 40, 20, 0, 0, 20, 40, 30],
    [40, 50, 30, 10, 10, 30, 50, 40]
];

const KING_EG_PST = [
    [-72, -48, -36, -24, -24, -36, -48, -72],
    [-48, -24, -12, 0, 0, -12, -24, -48],
    [-36, -12, 0, 12, 12, 0, -12, -36],
    [-24, 0, 12, 24, 24, 12, 0, -24],
    [-24, 0, 12, 24, 24, 12, 0, -24],
    [-36, -12, 0, 12, 12, 0, -12, -36],
    [-48, -24, -12, 0, 0, -12, -24, -48],
    [-72, -48, -36, -24, -24, -36, -48, -72]
];

var myColor;
function translateYourPosition(position) {
    let newPosition = [];
    if (position !== null) {
        switch (position[0]) {
            case 'a':
                newPosition[0] = 0;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'b':
                newPosition[0] = 1;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'c':
                newPosition[0] = 2;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'd':
                newPosition[0] = 3;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'e':
                newPosition[0] = 4;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'f':
                newPosition[0] = 5;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'g':
                newPosition[0] = 6;
                newPosition[1] = 8 - Number(position[1]);
                break;
            case 'h':
                newPosition[0] = 7;
                newPosition[1] = 8 - Number(position[1]);
                break;
        }
    }
    return newPosition;
}

function clone(board, color) {
    if (color === 'w') myColor = false;
    else if (color === 'b') myColor = true;
    let b = new Array(8);
    for (let i = 0; i < 8; i++) {
        b[i] = new Array(8);
    }
    for (let j = 0; j < board.length; j++) {
        if (board[j].color === 'b') {
            let pos = null;
            switch (board[j].piece) {
                case 'k':
                    pos = translateYourPosition(board[j].position);
                    let king = new King(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = king;
                    break;
                case 'q':
                    pos = translateYourPosition(board[j].position);
                    let queen = new Queen(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = queen;
                    break;
                case 'b':
                    pos = translateYourPosition(board[j].position);
                    let bishop = new Bishop(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = bishop;
                    break;
                case 'n':
                    pos = translateYourPosition(board[j].position);
                    let knight = new Knight(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = knight;
                    break;
                case 'r':
                    pos = translateYourPosition(board[j].position);
                    let rook = new Rook(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = rook;
                    break;
                case 'p':
                    pos = translateYourPosition(board[j].position);
                    let pawn = new Pawn(pos[0], pos[1], true);
                    b[pos[0]][pos[1]] = pawn;
                    break;
            }
        }
        else if (board[j].color === 'w') {
            let pos = null;
            switch (board[j].piece) {
                case 'k':
                    pos = translateYourPosition(board[j].position);
                    let king = new King(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = king;
                    break;
                case 'q':
                    pos = translateYourPosition(board[j].position);
                    let queen = new Queen(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = queen;
                    break;
                case 'b':
                    pos = translateYourPosition(board[j].position);
                    let bishop = new Bishop(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = bishop;
                    break;
                case 'n':
                    pos = translateYourPosition(board[j].position);
                    let knight = new Knight(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = knight;
                    break;
                case 'r':
                    pos = translateYourPosition(board[j].position);
                    let rook = new Rook(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = rook;
                    break;
                case 'p':
                    pos = translateYourPosition(board[j].position);
                    let pawn = new Pawn(pos[0], pos[1], false);
                    b[pos[0]][pos[1]] = pawn;
                    break;
            }
        }
    }
    return b;
}

function translateMyPosition(x, y) {
    if (x !== null && y !== null) {
        let text = null;
        switch (x) {
            case 0: text = 'a'; break;
            case 1: text = 'b'; break;
            case 2: text = 'c'; break;
            case 3: text = 'd'; break;
            case 4: text = 'e'; break;
            case 5: text = 'f'; break;
            case 6: text = 'g'; break;
            case 7: text = 'h'; break;
        }
        y = 8 - y;
        text += y.toString();
        return text;
    }
}

class Move {
    constructor(oldX, oldY, newX, newY) {
        this.oldX = oldX;
        this.oldY = oldY;
        this.newX = newX;
        this.newY = newY;
    }

    setOldX(oldX) {
        this.oldX = oldX;
    }

    getOldX() {
        return this.oldX;
    }

    setOldY(oldY) {
        this.oldY = oldY;
    }

    getOldY() {
        return this.oldY;
    }

    setNewX(newX) {
        this.newX = newX;
    }

    getNewX() {
        return this.newX;
    }

    setNewY(newY) {
        this.newY = newY;
    }

    getNewY() {
        return this.newY;
    }
}

class Piece {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.value = null;
    }
    setX(x) {
        this.x = x;
    }
    getX() {
        return this.x;
    }
    setY(y) {
        this.y = y;
    }
    getY() {
        return this.y;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    getType() {
        throw new Error('You have to implement the method getType!');
    }
    getMove() {
        throw new Error('You have to implement the method getMove!');
    }

    getValue() {
        return this.value;
    }
}

class Bishop extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this.value = 335;
    }
    getMove(currentX, currentY, board) {
        let moves = [];
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY + i]) {
                if (board[currentX + i][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY + i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY + i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY - i]) {
                if (board[currentX + i][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY - i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY - i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY - i]) {
                if (board[currentX - i][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY - i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY - i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY + i]) {
                if (board[currentX - i][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY + i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY + i));
            }
        }
        return moves;
    }

    getType() {
        return "Bishop";
    }

    getValue() {

    }
}

class Rook extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this.value = 500;
    }
    getMove(currentX, currentY, board) {
        let moves = [];
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY]) {
                if (board[currentX + i][currentY].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY]) {
                if (board[currentX - i][currentY].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX][currentY + i]) {
                if (board[currentX][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY + i));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY + i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX][currentY - i]) {
                if (board[currentX][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY - i));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY - i));
            }
        }
        return moves;
    }
    getType() {
        return "Rook";
    }
}

class Pawn extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
    }
    getMove(currentX, currentY, board) {
        let moves = [];
        if (Pawn.getColor() === 'b') {
            if (!board[currentX][currentY + 1]) {
                return moves.push(new Move(currentX, currentY, currentX, currentY + 1));

            }
            if (!board[currentX][currentY + 2] && currentY === 1) {
                moves.push(new Move(currentX, currentY, currentX, currentY + 2));

            }

            if (board[currentX + 1][currentY + 1]) {
                if (board[currentX + 1][currentY + 1].getColor() !== super.getColor())
                    moves.push(new Move(currentX, currentY, currentX + 1, currentY + 1));
            }
            if (board[currentX - 1][currentY + 1]) {
                if (board[currentX - 1][currentY + 1].getColor() !== super.getColor())
                    moves.push(new Move(currentX, currentY, currentX - 1, currentY + 1));
            }
        } else {
            if (!board[currentX][currentY - 1]) {

                return moves.push(new Move(currentX, currentY, currentX, currentY - 1));
            }

            if (!board[currentX][currentY - 2] && currentY === 6) {

                return moves.push(new Move(currentX, currentY, currentX, currentY - 2));
            }

            if (board[currentX - 1][currentY - 1]) {
                if (board[currentX - 1][currentY - 1].getColor() !== super.getColor())
                    moves.push(new Move(currentX, currentY, currentX - 1, currentY - 1));
            }

            if (board[currentX + 1][currentY - 1]) {
                if (board[currentX + 1][currentY - 1].getColor() !== super.getColor())
                    moves.push(new Move(currentX, currentY, currentX + 1, currentY - 1));

            }

        }

    }
    getType() {
        return "Pawn";
    }
}

class Queen extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
    }
    getMove(currentX, currentY, board) {
        let moves = [];
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY + i]) {
                if (board[currentX + i][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY + i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY + i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY - i]) {
                if (board[currentX + i][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY - i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY - i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY - i]) {
                if (board[currentX - i][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY - i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY - i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY + i]) {
                if (board[currentX - i][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY + i));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY + i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX + i][currentY]) {
                if (board[currentX + i][currentY].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + i, currentY));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX + i, currentY));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX - i][currentY]) {
                if (board[currentX - i][currentY].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - i, currentY));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX - i, currentY));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX][currentY + i]) {
                if (board[currentX][currentY + i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY + i));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY + i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (board[currentX][currentY - i]) {
                if (board[currentX][currentY - i].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY - i));
                }

            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY - i));
            }
        }
        return moves;
    }
    getType() {
        return "Queen";
    }
}

class King extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this.value = 10000;
    }

    getMove(currentX, currentY, board) {
        let moves = [];
        if (valid(currentX, currentY)) {
            if (board[currentX][currentY + 1]) {
                if (board[currentX][currentY + 1].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY + 1));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY + 1));
            }
        }
        if (valid(currentX, currentY)) {
            if (board[currentX][currentY - 1]) {
                if (board[currentX][currentY - 1].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX, currentY - 1));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX, currentY - 1));
            }
        }
        if (valid(currentX, currentY)) {
            if (board[currentX][currentY - 1]) {
                if (board[currentX + 1][currentY].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + 1, currentY));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + 1, currentY));
            }
        }
        if (valid(currentX, currentY)) {
            if (board[currentX - 1][currentY - 1]) {
                if (board[currentX - 1][currentY - 1].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - 1, currentY - 1));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - 1, currentY - 1));
            }
        }
        if (valid(currentX, currentY)) {
            if (board[currentX + 1][currentY + 1]) {
                if (board[currentX + 1][currentY + 1].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX + 1, currentY + 1));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX + 1, currentY + 1));
            }
        }
        if (valid(currentX, currentY)) {
            if (board[currentX - 1][currentY - 1]) {
                if (board[currentX - 1][currentY - 1].getColor() !== super.getColor()) {
                    moves.push(new Move(currentX, currentY, currentX - 1, currentY - 1));
                }
            }
            else {
                moves.push(new Move(currentX, currentY, currentX - 1, currentY - 1));
            }
        }
        return move;
    }
    getType() {
        return "King";
    }
}

class Knight extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this.value = 325;
    }
    getMove(currentX, currentY, board) {
        let moves = [];

        if (board[currentX + 1][currentY + 2]) {
            if (board[currentX + 1][currentY + 2].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX + 1, currentY + 2));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX + 1, currentY + 2));
        }


        if (board[currentX + 2][currentY + 1]) {
            if (board[currentX + 2][currentY + 1].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX + 2, currentY + 1));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX + 2, currentY + 1));
        }

        if (board[currentX + 2][currentY - 1]) {
            if (board[currentX + 2][currentY - 1].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX + 2, currentY - 1));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX + 2, currentY - 1));
        }

        if (board[currentX + 1][currentY - 2]) {
            if (board[currentX + 1][currentY - 2].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX + 1, currentY - 2));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX + 1, currentY - 2));
        }

        if (board[currentX - 1][currentY - 2]) {
            if (board[currentX - 1][currentY - 2].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX - 1, currentY - 2));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX - 1, currentY - 2));
        }

        if (board[currentX - 2][currentY - 1]) {
            if (board[currentX - 2][currentY - 1].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX - 2, currentY - 1));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX - 2, currentY - 1));
        }

        if (board[currentX - 2][currentY + 1]) {
            if (board[currentX - 2][currentY + 1].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX - 2, currentY + 1));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX - 2, currentY + 1));
        }

        if (board[currentX - 1][currentY + 2]) {
            if (board[currentX - 1][currentY + 2].getColor() !== super.getColor()) {
                moves.push(new Move(currentX, currentY, currentX - 1, currentY + 2));
            }
        } else {
            moves.push(new Move(currentX, currentY, currentX - 1, currentY + 2));
        }
        return move;
    }
    getType() {
        return "Knight";
    }
}

function Board(board) {
    let b = new Array(8);
    for (let i = 0; i < 8; i++) {
        b[i] = new Array(8);
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j]) {
                if (board[i][j].getColor() === false) {
                    if (null !== board[i][j].getType()) switch (board[i][j].getType()) {
                        case "King":
                            b[i][j] = new King(i, j, false);
                            break;
                        case "Queen":
                            b[i][j] = new Queen(i, j, false);
                            break;
                        case "Rook":
                            b[i][j] = new Rook(i, j, false);
                            break;
                        case "Bishop":
                            b[i][j] = new Bishop(i, j, false);
                            break;
                        case "Knight":
                            b[i][j] = new Knight(i, j, false);
                            break;
                        case "Pawn":
                            b[i][j] = new Pawn(i, j, false);
                            break;
                    }
                } else {
                    if (null !== board[i][j].getType()) switch (board[i][j].getType()) {
                        case "King":
                            b[i][j] = new King(i, j, true);
                            break;
                        case "Queen":
                            b[i][j] = new Queen(i, j, true);
                            break;
                        case "Rook":
                            b[i][j] = new Rook(i, j, true);
                            break;
                        case "Bishop":
                            b[i][j] = new Bishop(i, j, true);
                            break;
                        case "Knight":
                            b[i][j] = new Knight(i, j, true);
                            break;
                        case "Pawn":
                            b[i][j] = new Pawn(i, j, true);
                            break;
                    }
                }
            }
        }
    }
    return b;
}

function getAllMoves(board, color) {
    let listMoves = [];
    let myPieces = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j].color === color) {
                myPieces.push(board[i][j]);
            }
        }
    }
    for (let k = 0; k < myPieces.length; k++) {
        let piece = piece;
        switch (piece.getType()) {
            case "Rook":
                let listMovesRook = peice.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesRook);
                break;
            case "Pawn":
                let listMovesPawn = piece.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesPawn);
                break;
            case "King":
                let listMovesKing = piece.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesKing);
                break;
            case "Queen":
                let listMovesQueen = piece.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesQueen);
                break;
            case "Knight":
                let listMovesKnight = piece.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesKnight);
                break;
            case "Bishop":
                let listMovesBishop = piece.getMove(piece.getX(), piece.getY(), board);
                listMoves.push(listMovesBishop);
                break;
        }
    }
    return listMoves;
}

function getMoves(board, color) {
    let listMoves = [];
    let myPieces = [];
    let myKing = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != null) {
                if (board[i][j].getColor() === color) {
                    if (board[i][j].getType() === "King") {
                        myKing[0] = i;
                        myKing[1] = j;
                    }
                    myPieces.push(board[i][j]);
                }
            }
        }
    }
    for (let k = 0; k < myPieces.length; k++) {
        let piece = myPieces[k];
        switch (piece.getType()) {
            case "Rook":
                let listMovesRook = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesRook.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesRook[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesRook.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesRook);
                break;
            case "Pawn":
                let listMovesPawn = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesPawn.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesPawn[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesPawn.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesPawn);
                break;
            case "King":
                let listMovesKing = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesKing.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesKing[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesKing.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesKing);
                break;
            case "Queen":
                let listMovesQueen = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesQueen.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesQueen[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesQueen.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesQueen);
                break;
            case "Knight":
                let listMovesKnight = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesKnight.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesKnight[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesKnight.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesKnight);
                break;
            case "Bishop":
                let listMovesBishop = piece.getMove(piece.getX(), piece.getY(), board);
                for (let l = 0; l < listMovesBishop.length; l++) {
                    let copyBoard = Board(board);
                    let newBoard = makeMove(copyBoard, listMovesBishop[l]);
                    let listMovesCompetitor = getAllMoves(newBoard, !color);
                    for (let n = 0; n < listMovesCompetitor.length; n++) {
                        if (listMovesCompetitor[n].newX() === myKing[0] && listMovesCompetitor[n].newY() === myKing[1]) {
                            listMovesBishop.splice(l, 1);
                        }
                    }
                }
                listMoves.push(listMovesBishop);
                break;
        }
    }
    return listMoves;
}

function makeMove(board, move) {
    let pieceInOldPosition = board[move.getOldX()][move.getOldY()];
    board[move.getOldX()][move.getOldY()] = null;
    board[move.getNewX()][move.getNewY()] = pieceInOldPosition;
    pieceInOldPosition.setX() = move.getNewX();
    pieceInOldPosition.setY() = move.getNewY();
    return board;
}

var maxDepth = 2;
function Dicision(b) {
    let listMoves = new Array();
    listMoves = getMoves(b, myColor);
    let listState = new Array();
    let id;
    let tempMax = -99999;
    for (let i = 0; i < listMoves.length; i++) {
        listState.push(makeMove(b, listMoves[i]));
        var temp = minValue(b, listState, -99999, 99999, 1);
        if (temp > tempMax) {
            id = i;
            tempMax = temp;
        }
        listState.pop();
    }
    return listMoves[id];
}

function maxValue(b, listState, alpha, beta, depth) {
    if (depth > maxDepth)
        return evalU(b, listState, myColor);
    let listMoves = getMoves(listState[listState.length - 1], myColor);
    if (listMoves.length == 0)
        return evalU(b, listState, myColor);
    for (let i = 0; i < listMoves.length; i++) {
        listState.push(makeMove(listState[listState.length - 1], listMoves[i]));
        let temp = minValue(b, listState, alpha, beta, depth + 1);
        listState.pop();
        if (temp > alpha) {
            alpha = temp;
        }
        if (beta <= alpha) {
            break;
        }
    }
    return alpha;
}

function minValue(b, listState, alpha, beta, depth) {
    if (depth > maxDepth)
        return evalU(b, listState, !myColor);
    let listMoves = getMoves(listState[listState.length - 1], myColor);
    if (listMoves.length == 0)
        return evalU(b, listState, !myColor);
    for (let i = 0; i < listMoves.length; i++) {
        listState.push(makeMove(listState[listState.length - 1], listMoves[i]));
        let temp = maxValue(b, listState, alpha, beta, depth + 1);
        listState.pop();
        if (temp < beta) {
            beta = temp;
        }
        if (beta <= alpha) {
            break;
        }
    }
    return beta;
}
function evalU(b, listState, currentColor) {
    let temp = 0;
    for (let i = 0; i < board.length; i++) {
        temp += b[i].getValue();
    }
    return temp;
}

function translateDoMove(move) {
    return {
        start: translateMyPosition(move.getOldX(), move.getOldY()),
        stop: translateMyPosition(move.getNewX(), move.getNewY())
    }
}
function valid(x, y) {
    if (x > 7 || x < 0 || y > 7 || y < 0) return false;
    return true;
}

234219374089127389721089571287102870518923


