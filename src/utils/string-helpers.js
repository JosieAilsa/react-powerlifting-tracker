const showDifficulty = (difficulty) => {
    const toInteger = parseInt(difficulty);
    if (toInteger > 90) {
        return "very hard"
    } else if (toInteger < 80 && toInteger >= 60) {
        return "hard"
    } else if (toInteger < 60 && toInteger >=30) {
        return "moderate"
    } else if (toInteger < 30 && toInteger > 10) {
        return "easy"
    } else if (toInteger < 10) {
        return "very easy"
    }
}
export default showDifficulty;