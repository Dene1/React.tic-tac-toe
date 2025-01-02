import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout.jsx";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export default function Field({field, ...props}) {

    function checkWin(field) {
        for (const item of WIN_PATTERNS) {
            let firstElement
            const isWinning = item.every(index => {
                if (index === item[0]) {
                    firstElement = field[index]
                }
                return field[index] === firstElement && field[index] !== ""
            })
            if (isWinning) {
                return firstElement
            }
        }
        return null
    }

    const handleClick = (index) => {
        const newField = [...field];
        if (newField[index] === "" && !props.isGameEnded) {
            newField[index] = props.currentPlayer
            props.setField(newField)
            const winner = checkWin(newField)
            if (winner) {
                return props.setIsGameEnded(true)
            } else {
                const isDraw = !newField.includes("");
                if (isDraw) {
                    props.setIsDraw(true);
                    props.setIsGameEnded(true);
                } else {
                    props.setCurrentPlayer(props.currentPlayer === "X" ? "O" : "X");
                }
            }
        }
    }

    const mass = field.map((item, index) => <button
        key={index}
        onClick={() => handleClick(index)}>{item}</button>)

    return (
        <FieldLayout mass={mass}/>
    )
}

Field.propTypes = {
    field: PropTypes.array,
    setField: PropTypes.func.isRequired,
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.bool,
    setIsDraw: PropTypes.func.isRequired,
    setIsGameEnded: PropTypes.func,
    setCurrentPlayer: PropTypes.func.isRequired,
}
