import "../../mobilecss/two-columns.css"; 

const TwoColumnLayout = ({ children, imageSrc, imageAlt }) => {
  return (
    <div className="TwoColumnLayout">
      <div className="TextContainer">{children}</div>
      <img className="Image" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default TwoColumnLayout;
