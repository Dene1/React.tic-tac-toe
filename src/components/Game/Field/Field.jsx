import FieldLayout from "./FieldLayout.jsx";
import checkWin from "../../../utils/helpers/CheckWin.jsx"
import {
    setDraw,
    setFields,
    setIGameEnded,
    setPlayer,
} from "../../../reducer/actions/actions.js";
import {useDispatch, useSelector} from "react-redux";

export default function Field() {

    const dispatch = useDispatch()

    const field = useSelector(state => state.field)
    const currentPlayer = useSelector(state => state.currentPlayer)
    const isGameEnded = useSelector(state => state.isGameEnded)

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
        dispatch(setPlayer(value))
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
