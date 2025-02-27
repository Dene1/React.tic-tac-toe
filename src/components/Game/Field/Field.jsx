import FieldLayout from "./FieldLayout.jsx";
import checkWin from "../../../utils/helpers/CheckWin.jsx"
import {useAppState} from "../../../redux/useAppState.js";
import {
    setCurrentPlaye,
    setDraw,
    setFields,
    setIGameEnded,
} from "../../../utils/actions/actions.js";

export default function Field() {

    const {state, dispatch} = useAppState();
    const {field, currentPlayer, isGameEnded} = state


    const setIsGameEnded = (value) => {
        dispatch(setIGameEnded(value));
    }

    const setIsDraw = (value) => {
        dispatch(setDraw(value))
    }

    const setField = (value) => {
        dispatch(setFields(value))
    }

    const setCurrentPlayer = (value) => {
        dispatch(setCurrentPlaye(value))
    }

    const handleClick = (index) => {
        const newField = [...field];
        if (newField[index] === "" && !isGameEnded) {
            newField[index] = currentPlayer
            setField(newField)
            const winner = checkWin(newField)
            if (winner) {
                return setIsGameEnded(true)
            } else {
                const isDraw = !newField.includes("");
                if (isDraw) {
                    setIsDraw(true);
                    setIsGameEnded(true);
                } else {
                    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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
