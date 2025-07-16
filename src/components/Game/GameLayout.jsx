import PropTypes from "prop-types";
import Information from "./Information/Information"
import Field from "./Field/Field"
import { url } from "@/constants/url"


export default function GameLayout(props) {
    return (
        <>
            <Information
                isDraw={props.isDraw}
                isGameEnded={props.isGameEnded}
                currentPlayer={props.currentPlayer}
                setIsGameEnded={props.setIsGameEnded}
            />
            <Field field={props.field}
                   currentPlayer={props.currentPlayer}
                   setField={props.setField}
                   setCurrentPlayer={props.setCurrentPlayer} // Pass the function here
                   isGameEnded={props.isGameEnded}
                   setIsDraw={props.setIsDraw}
                   setIsGameEnded={props.setIsGameEnded}
            />
            <br/>
            <button className="reset" onClick={props.reset}>
                <img src={url} alt="reset"/>
            </button>
        </>
    )
}

GameLayout.propTypes = {
    setIsDraw: PropTypes.func.isRequired,
    setIsGameEnded: PropTypes.func.isRequired,
    setCurrentPlayer: PropTypes.func.isRequired,
    setField: PropTypes.func.isRequired,
    field: PropTypes.array.isRequired,
    isDraw: PropTypes.bool.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    currentPlayer: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired
}
