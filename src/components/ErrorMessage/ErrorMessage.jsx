import "./ErrorMessage.scss"
import cross from "../../assets/images/icons/lifticon-08.svg"
const ErrorMessage = ({handleModalClick}) => {
    return ( 
        <section className="error-message">
            <div className="error-message__text">
                <div className="error-message__header" onClick={handleModalClick}>
                    <h3 className="error-message__title"> 😬 Whoops this is embarrassing 😬 </h3>
                    <img className="error-message__exit" src={cross} alt="exit" />
                </div>
            <p className="error-message__text">My google cloud subscription for my API and database hosting has expired so you can longer see these lifts.</p>
            </div>
        </section>
    );
}
 
export default ErrorMessage;