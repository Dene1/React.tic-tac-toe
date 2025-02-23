import Information from "./Information/Information.jsx"
import Field from "./Field/Field.jsx"


export default function GameLayout({reset}) {

    return (
        <>
            <Information/>
            <Field/>
            <br/>
            <button onClick={reset}>Начать заново</button>
        </>
    )
}
