"use client";

import Link from "next/link";
import { useState } from "react";

type Square = "X" | "O" | null;

function calculateWinner(squares: Square[]): Square {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((s) => s !== null);

  function handleClick(i: number) {
    if (board[i] || winner) return;
    const next = board.slice();
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  let status: string;
  if (winner) {
    status = `${winner} wins!`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `${xIsNext ? "X" : "O"}'s turn`;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-300 via-sky-100 to-green-200 px-6 py-12">
      <Link
        href="/"
        className="mb-4 text-lg font-semibold text-purple-600 hover:text-purple-800 hover:underline"
      >
        &larr; Back to Clubhouse
      </Link>

      <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg sm:text-6xl">
        Tic-Tac-Toe
      </h1>

      <p className="mb-6 text-2xl font-bold text-purple-600 sm:text-3xl">
        {status}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {board.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-4xl font-extrabold shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-28 sm:w-28 sm:text-5xl"
            style={{
              color: value === "X" ? "#7e22ce" : "#ea580c",
            }}
          >
            {value}
          </button>
        ))}
      </div>

      {(winner || isDraw) && (
        <button
          onClick={reset}
          className="mt-8 rounded-full bg-purple-600 px-8 py-3 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-purple-700 active:scale-95"
        >
          Play Again
        </button>
      )}
    </div>
  );
}
