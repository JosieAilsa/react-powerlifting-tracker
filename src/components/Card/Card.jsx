import "./Card.scss"
const Card = ({liftType, weight, difficulty, level, date,img}) => {
    return ( <>
            <div className = "card">
                <h4 className ="card__title">{liftType}</h4>
                <img src = {img} className = "card__image"></img>
                <div className="card__text">
                    <p className ="card__info">Weight:</p>
                    <p className ="card__info">{weight}kgs</p>
                    <p className ="card__info">Exertion:</p>
                    <p className ="card__info">{level.charAt(0).toUpperCase() + level.slice(1)} ({difficulty})%</p>
                    <p className ="card__info">Completed:</p>
                    <p className ="card__info">{date}</p>
                </div>
            </div>
            </>
       
     );
}
 
export default Card;