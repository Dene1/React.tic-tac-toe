import {InformationLayout} from "./InformationLayout.jsx";
import {connect} from "react-redux";
import {Component} from "react";

export class Information extends Component {
    render() {
        let status

        if (this.props.isDraw) {
            status = "Ничья"
        } else if (this.props.isGameEnded) {
            status = `Игра завершена. Победа: ${this.props.currentPlayer}`
        } else {
            status = `Ходит: ${this.props.currentPlayer}`
        }
        return (
            <InformationLayout status={status}/>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isDraw: state.isDraw,
    isGameEnded: state.isGameEnded,
})

export default connect(mapStateToProps)(Information)
