import React from 'react';
import '../index.css';

export const moves = (historyTemp, setStepNumber, setXIsNext) => {
    return historyTemp.map((_, move) => {
        const jumpTo = (step) => {
            setStepNumber(step)
            setXIsNext((step % 2) === 0)
        };
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    })
};

// export const moves = Game.historyTemp.map((_, move) => {
//     const jumpTo = (step) => {
//         Game.setStepNumber(step)
//         Game.setXIsNext((step % 2) === 0)
//     };

//     const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//     return (
//         <li key={move}>
//             <button onClick={() => jumpTo(move)}>{desc}</button>
//         </li>
//     );
// });

export default moves