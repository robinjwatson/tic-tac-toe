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
                <div>
                    <Square
                        label="One"
                        value={squares[0]}
                        onClick={handleOnClick(0)}
                    />
                </div>
                <div>
                    <Square
                        label="Two"
                        value={squares[1]}
                        onClick={handleOnClick(1)}
                    />
                </div>
                <div>
                    <Square
                        label="Three"
                        value={squares[2]}
                        onClick={handleOnClick(2)}
                    />
                </div>
            </div>
            <div className="board-row">
                <div>
                    <Square
                        label="Four"
                        value={squares[3]}
                        onClick={handleOnClick(3)}
                    />
                </div>
                <div>
                    <Square
                        label="Five"
                        value={squares[4]}
                        onClick={handleOnClick(4)}
                    />
                </div>
                <div>
                    <Square
                        label="Six"
                        value={squares[5]}
                        onClick={handleOnClick(5)}
                    />
                </div>
            </div>
            <div className="board-row">
                <Square
                    label="Seven"
                    value={squares[6]}
                    onClick={handleOnClick(6)}
                />
                <Square
                    label="Eight"
                    value={squares[7]}
                    onClick={handleOnClick(7)}
                />
                <Square
                    label="Nine"
                    value={squares[8]}
                    onClick={handleOnClick(8)}
                />
            </div>
        </div>
    );
};

export default Board