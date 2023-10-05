import "../../mobilecss/form.css";

const Form = ({ children, onSubmit }) => {
  return (
    <div className="form-container-style">
      <form onSubmit={onSubmit} className="form-style">
        {children}
      </form>
    </div>
  );
};

export default Form;
