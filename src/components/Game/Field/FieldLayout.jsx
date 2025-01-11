import styles from "./styles.module.css"
import PropTypes from "prop-types";

export default function FieldLayout({createField}) {
    return (
        <div className={styles.component}>
            <div className={styles.container}>
                {createField}
            </div>
        </div>
    )
}

FieldLayout.propTypes = {
    createField: PropTypes.array
}

