import WIN_PATTERNS from "../../components/constans/Constans.jsx";

export default function checkWin(field) {
    for (const item of WIN_PATTERNS) {
        let firstElement
        const isWinning = item.every(index => {
            if (index === item[0]) {
                firstElement = field[index]
            }
            return field[index] === firstElement && field[index] !== ""
        })
        if (isWinning) {
            return firstElement
        }
    }
    return null
}
