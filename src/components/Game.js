import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as utils from '../utils';
import Board from './Board';
import Status from './Status';
import Moves from './Moves';
import '../index.css';

const Game = () => {
    const dispatch = useDispatch()
    const gameCount = useSelector((state) => state.gameCount.value)
    const isXnext = useSelector((state) => state.statusReducer.isXnext)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    // const [xIsNext, setXIsNext] = useState(true)

    const jumpTo = (move) => {
        setHistory(history.slice(0, move + 1))
        setStepNumber(move)


        dispatch({ type: 'incrementGameCounter' })


        if ((move % 2) === 0) {
            dispatch({ type: 'xIsNext' })
            return;
        }

        // xIsNext((move % 2) === 0)

    };

    const title = useMemo(() =>
        `Move number #${stepNumber}`, [stepNumber]);

    const handleClick = (i) => {
        const squares = history[stepNumber].slice();
        const randomNumber = utils.randomNumber();

        if (utils.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXnext ? "X" : "O";

        setHistory(history.concat([squares]))
        setStepNumber(stepNumber + 1)
        dispatch({ type: 'oIsNext' })

        if (!isXnext) {
            handleClick(randomNumber)
            dispatch({ type: 'xIsNext' })
            return;
        }
    }

    return (
        <div className="game">
            <h1>
                "Tic-TacToe"
            </h1>
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
                        xIsNext={isXnext}
                    />
                </div>
                <div>{title}</div>
                <ol>
                    <Moves
                        history={history}
                        jumpTo={jumpTo}
                    />
                </ol>
                <div>
                    Game count: {gameCount}
                </div>
                <button onClick={() => { dispatch({ type: 'resetGameCounter' }) }}>
                    Reset game count
                </button>
            </div>
        </div >
    );
};

export default Game