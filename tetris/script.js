const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const scale = 30; 
context.scale(scale, scale);

// Создаем игровое поле (10x20)
const rows = 20;
const cols = 10;
const board = Array.from({ length: rows }, () => Array(cols).fill(0));

// Фигуры
const tetrominos = {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    Z: [[1, 1, 0], [0, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
};

const colors = {
    0: 'black',
    1: 'cyan',
    2: 'yellow',
    3: 'purple',
    4: 'green',
    5: 'red',
    6: 'blue',
    7: 'orange',
};

// Текущая фигура
let piece = {
    shape: tetrominos['T'],
    row: 0,
    col: Math.floor(cols / 2) - 1
};

// Рисуем поле и фигуры
function draw() {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            context.fillStyle = colors[value];
            context.fillRect(x, y, 1, 1);
        });
    });

    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = colors[1];
                context.fillRect(piece.col + x, piece.row + y, 1, 1);
            }
        });
    });
}

// Проверка столкновения
function collide() {
    return piece.shape.some((row, dy) => {
        return row.some((value, dx) => {
            const x = piece.col + dx;
            const y = piece.row + dy;
            return value && (y >= rows || board[y]?.[x] !== 0);
        });
    });
}

// Прикрепление фигуры к полю
function merge() {
    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                board[piece.row + y][piece.col + x] = 1;
            }
        });
    });
}

// Очистка заполненных линий
function clearLines() {
    board.forEach((row, y) => {
        if (row.every(value => value !== 0)) {
            board.splice(y, 1);
            board.unshift(Array(cols).fill(0));
        }
    });
}

// Движение вниз
function drop() {
    piece.row++;
    if (collide()) {
        piece.row--;
        merge();
        clearLines();
        resetPiece();
    }
}

// Сброс фигуры
function resetPiece() {
    const keys = Object.keys(tetrominos);
    const random = keys[Math.floor(Math.random() * keys.length)];
    piece.shape = tetrominos[random];
    piece.row = 0;
    piece.col = Math.floor(cols / 2) - 1;

    if (collide()) {
        alert('Game Over!');
        board.forEach(row => row.fill(0));
    }
}

// Управление
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') piece.col--;
    if (e.key === 'ArrowRight') piece.col++;
    if (e.key === 'ArrowDown') drop();
    if (e.key === 'ArrowUp') rotate();
    if (collide()) {
        if (e.key === 'ArrowLeft') piece.col++;
        if (e.key === 'ArrowRight') piece.col--;
    }
});

// Вращение
function rotate() {
    const rotated = piece.shape[0].map((_, i) =>
        piece.shape.map(row => row[i]).reverse()
    );
    piece.shape = rotated;
    if (collide()) piece.shape = rotated.map(row => row.reverse());
}

// Главный цикл игры
function update() {
    draw();
    drop();
    setTimeout(update, 100);
}

update();
