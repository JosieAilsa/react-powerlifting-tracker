import "./Button.scss";

const Button = ({ title, handleClick }) => {
  return (
    <>
      {/* <button className="btn" onClick ={handleClick}>{text}</button> */}
      <input type="reset" className="btn" value={title} onClick={handleClick} />
    </>
  );
};

export default Button;
