import {Component} from "react";

export class InformationLayout extends Component {
    render() {
        return (
            <>
                <h1>Крестики - Нолики</h1>
                <div>{this.props.status}</div>
                <br/>
            </>
        )
    }
}
