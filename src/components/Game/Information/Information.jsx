import InformationLayout from "./InformationLayout.jsx";
import {useSelector} from "react-redux";

export default function Information() {

    const isDraw = useSelector(state => state.isDraw)
    const currentPlayer = useSelector(state => state.currentPlayer)
    const isGameEnded = useSelector(state => state.isGameEnded)


    let status

    if (isDraw) {
        status = "Ничья"
    } else if (isGameEnded) {
        status = `Игра завершена. Победа: ${currentPlayer}`
    } else {
        status = `Ходит: ${currentPlayer}`
    }

    return (
        <InformationLayout status={status}/>
    )
}


