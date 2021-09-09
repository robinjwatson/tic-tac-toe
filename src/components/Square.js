import '../index.css';

const Square = ({ onClick, value, label }) => {
    return (
        <button data-cy={"square" + label} className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square