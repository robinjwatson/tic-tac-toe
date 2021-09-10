import '../index.css';

const Moves = ({ history, jumpTo }) => {
    return history.map((_, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button
                    data-cy={"gameCount" + move}
                    onClick={() => jumpTo(move)}>{desc}
                </button>
            </li>
        );
    })
};

export default Moves