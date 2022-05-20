import lift from "../../assets/images/icons/lifticon-03.svg"
import "./Welcome.scss"
const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome__wrapper">
                <h3 className="welcome__text">Welcome!</h3>
                <p className="welcome__copy">Placeholder text</p>
                <img className="welcome__img"src={lift} alt="lift" />
            </div>
        </section>
    );
}
 
export default Welcome;