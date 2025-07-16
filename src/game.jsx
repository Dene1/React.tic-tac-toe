import {useState} from "react"
import GameLayout from "@/components/Game/GameLayout"
import {initialState} from "./constants/constants"

export default function Game() {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(initialState)

    const reset = () => {
        setIsDraw(false)
        setIsGameEnded(false)
        setCurrentPlayer("X")
        setField(initialState)
    }

    return (
        <GameLayout
            field={field}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
            currentPlayer={currentPlayer}
            setField={setField}
            setIsDraw={setIsDraw}
            setIsGameEnded={setIsGameEnded}
            setCurrentPlayer={setCurrentPlayer}
            reset={reset}
        />
    )
}
