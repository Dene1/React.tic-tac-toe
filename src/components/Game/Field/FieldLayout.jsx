import {Component} from "react";

export class FieldLayout extends Component {
    render() {
        return (
            <div className="grid flex-col items-center justify-center w-full">
                <div
                    className="grid grid-rows-3 grid-cols-3 gap-1
                 text-2xl rounded-2xl text-center bg-neutral-700 p-2 h-80 w-80">
                    {this.props.createField}
                </div>
            </div>
        )
    }
}
