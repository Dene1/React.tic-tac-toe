import styles from "./styles.module.css"
import PropTypes from "prop-types";

export default function FieldLayout({mass}) {
    return (
        <div className={styles.component}>
            <div className={styles.container}>
                {mass}
            </div>
        </div>
    )
}

FieldLayout.propTypes = {
    mass: PropTypes.array
}
