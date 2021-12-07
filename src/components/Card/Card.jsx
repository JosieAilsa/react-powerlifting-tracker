import "./Card.scss"
const Card = ({liftType, weight, difficulty, date}) => {
    return ( <>
            <div className = "card">
                <h4>{liftType}</h4>
                <p>{weight}kgs</p>
                <p> Difficulty: {difficulty} %</p>
                <p>On the {date}</p>
            </div>
            </>
       
     );
}
 
export default Card;