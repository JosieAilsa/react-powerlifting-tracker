import "./Card.scss";
import cross from "../../assets/images/icons/lifticon-08.svg"
const Card = ({id, liftType, weight, difficulty, level, date, img, setDeleteId}) => {
  return (
    <div className="card">
      <button className="delete-button" onClick = {() => {setDeleteId(id)}}>
        <img src={cross} className="delete-button__icon" alt="delete lift" />
      </button>
      <h4 className="card__title">{liftType}</h4>
      <img src={img} className="card__icon"></img>
      <div className="card__text">
        <p className="card__info">Weight:</p>
        <p className="card__info">{weight}kgs</p>
        <p className="card__info">Exertion:</p>
        <p className="card__info">
          {level.charAt(0).toUpperCase() + level.slice(1)} ({difficulty})%
        </p>
        <p className="card__info">Completed:</p>
        <p className="card__info">{date}</p>
      </div>
    </div>
  );
};

export default Card;
