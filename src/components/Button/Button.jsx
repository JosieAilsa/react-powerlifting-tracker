import "./Button.scss";

const Button = ({ title, handleClick }) => {
  return (
    <>
      <input type="reset" className="btn" value={title} onClick={handleClick} />
    </>
  );
};

export default Button;
