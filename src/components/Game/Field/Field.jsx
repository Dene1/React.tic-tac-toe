import {FieldLayout} from "./FieldLayout.jsx";
import {
    setDraw,
    setFields,
    setIGameEnded,
    setPlayer,
} from "../../../reducer/actions/actions.js";
import {connect} from "react-redux";
import {Component} from "react";
import checkWin from "../../../utils/helpers/CheckWin.jsx";

class Fields extends Component {

    render() {
        const handleClick = (index) => {
            const newField = [...this.props.field];
            if (newField[index] === "" && !this.props.isGameEnded) {
                newField[index] = this.props.currentPlayer
                this.props.setField(newField)
                const winner = checkWin(newField)
                if (winner) {
                    return this.props.setIsGameEnded(true)
                } else {
                    const isDraw = !newField.includes("");
                    if (isDraw) {
                        this.props.setIsDraw(true);
                        this.props.setIsGameEnded(true);
                    } else {
                        this.props.setCurrentPlayer(this.props.currentPlayer === "X" ? "O" : "X");
                    }
                }
            }
        }

        const createField = this.props.field.map((item, index) => <button
            key={index}
            onClick={() => handleClick(index)}>{item}</button>)

        return (
            <FieldLayout createField={createField}/>
        )
    }
}

const mapStateToProps = (state) => ({
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
})

const mapDispatchToProps = (dispatch) => ({
    setIsGameEnded: (value) => dispatch(setIGameEnded(value)),
    setIsDraw: (value) => dispatch(setDraw(value)),
    setField: (fields) => dispatch(setFields(fields)),
    setCurrentPlayer: (player) => dispatch(setPlayer(player)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fields)
