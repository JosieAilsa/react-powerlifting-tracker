import "./Button.scss";

const Button = ({buttonText, handleSubmit, className}) => {
  return (
    <>
      <button className = {className} type="reset" className="btn" onClick={handleSubmit}>{buttonText}</button>
    </>
  );
};

export default Button;
