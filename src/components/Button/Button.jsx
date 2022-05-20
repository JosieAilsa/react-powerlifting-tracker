import "./Button.scss";

const Button = ({buttonText, handleSubmit, className}) => {
  return (
    <>
      <button className = {`btn ${className}`} type="reset" onClick={handleSubmit}>{buttonText}</button>
    </>
  );
};

export default Button;
