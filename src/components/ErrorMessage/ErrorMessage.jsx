import "./ErrorMessage.scss"
const ErrorMessage = () => {
    return ( 
        <section className="error-message">
            <div className="error-message__text">
            <h3 className="error-message__title"> 😬 Whoops this is embarrassing 😬 </h3>
            <p className="error-message__text">My google cloud subscription for my API and database hosting has expired so you can longer see these lifts.</p>
            </div>
        </section>
    );
}
 
export default ErrorMessage;