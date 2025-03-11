import Information from "./Information/Information.jsx"
import Field from "./Field/Field.jsx"
import {Component} from "react";

export class GameLayout extends Component {
    render() {
        return (
            <>
                <Information/>
                <Field/>
                <br/>
                <button onClick={this.props.resetGame}>Начать заново</button>
            </>
        )
    }
}
