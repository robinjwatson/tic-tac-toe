import { useState, useMemo } from 'react';
import * as utils from '../utils';
import Board from './Board';
import '../index.css';

export const Game = () => {

    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)

    const title = useMemo(() =>
        `Move number #${stepNumber}`, [stepNumber]);

    const handleClick = (i) => {
        const hist = history.slice(0, stepNumber + 1);
        const current = hist[stepNumber];
        const squares = current.squares.slice();
        const randomNumber = utils.randomNumber();

        if (utils.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";

        setHistory(hist.concat([
            {
                squares: squares
            }
        ]))
        setStepNumber(stepNumber + 1)
        setXIsNext(!xIsNext)

        if (!xIsNext) {
            handleClick(randomNumber)
        }
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    };

    const historyTemp = history;
    const current = historyTemp[stepNumber];
    const winner = utils.calculateWinner(current.squares);
    const draw = !winner && stepNumber === 9;
    const moves = historyTemp.map((step, move) => {     //when step is taken out, warnings appear
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (draw) {
        status = "Draw, replay";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <div>{title}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};