import "../../mobilecss/form.css";

const Form = ({ children, onSubmit }) => {
  return (
    <div className="formContainerStyle">
      <form onSubmit={onSubmit} className="formStyle">
        {children}
      </form>
    </div>
  );
};

export default Form;
