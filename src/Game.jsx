import {GameLayout} from "./components/Game/GameLayout.jsx";
import {reset} from "./reducer/actions/actions.js";
import {Component} from "react";
import {connect} from "react-redux";

class Game extends Component {

    render() {
        return (
            <GameLayout resetGame={this.props.resetGame}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetGame: () => dispatch(reset())
    }
}

export default connect(null, mapDispatchToProps)(Game);
