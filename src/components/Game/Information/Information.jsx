import PropTypes from "prop-types";
import React from "react";
import InformationLayout from "./InformationLayout.jsx";

export default function Information({
                                        isDraw,
                                        isGameEnded,
                                        currentPlayer,
                                    }) {
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

Information.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
}


