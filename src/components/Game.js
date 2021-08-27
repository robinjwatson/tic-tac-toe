import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as utils from '../utils';
import Board from './Board';
import Status from './Status';
import Moves from './Moves';
import '../index.css';

const Game = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.example)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)

    const jumpTo = (move) => {
        setStepNumber(move)
        setXIsNext((move % 2) === 0)
        setHistory(history.slice(0, move + 1))
    };

    const title = useMemo(() =>
        `Move number #${stepNumber}`, [stepNumber]);

    const handleClick = (i) => {
        const squares = history[stepNumber].slice();
        const randomNumber = utils.randomNumber();

        if (utils.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";

        setHistory(history.concat([squares]))
        setStepNumber(stepNumber + 1)
        setXIsNext(!xIsNext)

        if (!xIsNext) {
            handleClick(randomNumber)
        }
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={history[stepNumber]}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>
                    <Status
                        current={history[stepNumber]}
                        stepNumber={stepNumber}
                        xIsNext={xIsNext}
                    />
                </div>
                <div>{title}</div>
                <ol>
                    <Moves
                        history={history}
                        jumpTo={jumpTo}
                    />
                </ol>
                <button onClick={
                    () => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button onClick={
                    () => dispatch({ type: 'increment by', payload: 3 })}>
                    Increment by 3
                </button>
                <button onClick={
                    () => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
                <button onClick={
                    () => dispatch({ type: 'decrement by', payload: 3 })}>
                    Decrement by 3
                </button>
                <div>
                    {counter}
                </div>
            </div>
        </div>
    );
};

export default Game