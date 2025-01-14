import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout.jsx";
import checkWin from "../../../utils/helpers/CheckWin.jsx"

export default function Field({field, ...props}) {
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

    const createField = field.map((item, index) => <button
        key={index}
        onClick={() => handleClick(index)}>{item}</button>)

    return (
        <FieldLayout createField={createField}/>
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
