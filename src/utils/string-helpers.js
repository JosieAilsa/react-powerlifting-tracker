const showDifficulty = (difficulty) => {
    if (difficulty >= 90) {
        return "very hard"
    } else if (difficulty >= 80) {
        return "hard"
    } else if (difficulty >= 40) {
        return"moderate"
    } else if (difficulty >= 20) {
        return "easy"
    } else {
        return "very easy"
    }
}
export default showDifficulty;