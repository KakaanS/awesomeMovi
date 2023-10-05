import "../../mobilecss/two-columns.css";

const TwoColumnLayout = ({ children, imageSrc, imageAlt }) => {
  return (
    <div className="two-column-layout">
      <div className="text-container">{children}</div>
      <img className="image" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default TwoColumnLayout;
