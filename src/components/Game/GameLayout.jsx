import Information from "./Information/Information.jsx"
import Field from "./Field/Field.jsx"
import {reset} from "../../utils/actions/actions.js";
import {useAppState} from "../../redux/useAppState.js";


export default function GameLayout() {

    const {dispatch} = useAppState()

    const resetClick = (value) => {
        dispatch(reset(value)); // Dispatch the action creator!
    };

    return (
        <>
            <Information/>
            <Field/>
            <br/>
            <button onClick={resetClick}>Начать заново</button>
        </>
    )
}
