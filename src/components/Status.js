import * as utils from '../utils';
import '../index.css';

const Status = ({ current, stepNumber, xIsNext }) => {
    const winner = utils.calculateWinner(current);
    const draw = !winner && stepNumber === 9;
    let content
    if (winner) {
        content = "Winner: " + winner;
    } else if (draw) {
        content = "Draw, replay";
    } else {
        content = "Next player: " + (xIsNext ? "X" : "O");
    };
    return (
        content
    )
};

export default Status