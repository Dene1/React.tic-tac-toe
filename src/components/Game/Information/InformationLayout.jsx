import PropTypes from "prop-types";

export default function InformationLayout({status}) {
    return (
        <>
            <h1>Крестики - Нолики</h1>
            <div>{status}</div>
            <br/>
        </>
    )
}

InformationLayout.propTypes = {
    status: PropTypes.string,
}

