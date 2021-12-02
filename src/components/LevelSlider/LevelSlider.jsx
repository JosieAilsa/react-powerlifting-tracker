
import "./LevelSlider.scss"

const LevelSlider = () => {
    return (
    <>
    <div class="difficulty">
    <h4 className = "difficulty__title">How did it feel?</h4>
    <div className = "slider">
        <div class = "slider__labels">
            <p class = "slider__label">Easy</p>
            <p class = "slider__label">Hard</p>
        </div>
        <input type="range" min="1" max="100" class="slider__input" id="myRange"/>
        </div>
    </div>
    </>
    );
}
 
export default LevelSlider 