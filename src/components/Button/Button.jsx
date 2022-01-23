import "./Button.scss";

const Button = ({ title, handleSubmit }) => {
  return (
    <>
      <input type="reset" className="btn" value={title} onClick={handleSubmit} />
    </>
  );
};

export default Button;
