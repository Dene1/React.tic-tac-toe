import "./App.css"
import GameLayout from "./components/Game/GameLayout.jsx"
import {useDispatch} from "react-redux";
import {reset} from "./reducer/actions/actions.js";

export default function Game() {
    const dispatch = useDispatch()

    const resetGame = () => {
        console.log("resetGame")
        dispatch(reset());
    };

    return (
        <GameLayout reset={resetGame}/>
    )
}
