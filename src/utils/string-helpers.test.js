import {showDifficulty} from "./string-helpers";

describe("Should return correct value", () => {
    it("Should return very hard when given `90`", () => {
        const difficulty = showDifficulty(90)
        expect(difficulty).toBe("very hard")
    })
    it("Should return very hard when given `60`", () => {
        const difficulty = showDifficulty("60")
        expect(difficulty).toBe("hard")
    })
    it("Should return very hard when given 50", () => {
        const difficulty = showDifficulty(50)
        expect(difficulty).toBe("moderate")
    })
    it("Should return undefined if given NaN", () => {
        const difficulty = showDifficulty("sfhh")
        expect(difficulty).toBe(undefined)
    })
})