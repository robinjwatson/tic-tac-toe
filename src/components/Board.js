import Square from './Square';
import '../index.css';

const Board = ({ squares, onClick }) => {
    const handleOnClick = (i) => {
        return (
            () => onClick(i)
        )
    };
    return (
        <div>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onClick={handleOnClick(0)}
                />
                <Square
                    value={squares[1]}
                    onClick={handleOnClick(1)}
                />
                <Square
                    value={squares[2]}
                    onClick={handleOnClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onClick={handleOnClick(3)}
                />
                <Square
                    value={squares[4]}
                    onClick={handleOnClick(4)}
                />
                <Square
                    value={squares[5]}
                    onClick={handleOnClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onClick={handleOnClick(6)}
                />
                <Square
                    value={squares[7]}
                    onClick={handleOnClick(7)}
                />
                <Square
                    value={squares[8]}
                    onClick={handleOnClick(8)}
                />
            </div>
        </div>
    );
};

export default Board