import "./Card.scss"
const Card = ({liftType, weight, difficulty, level, date}) => {
    return ( <>
            <div className = "card">
                <h4>{liftType}</h4>
                <p>Weight: {weight}kgs</p>
                <p> Exertion: {level.charAt(0).toUpperCase() + level.slice(1)} ({difficulty})%</p>
                <p>Completed: {date}</p>
            </div>
            </>
       
     );
}
 
export default Card;