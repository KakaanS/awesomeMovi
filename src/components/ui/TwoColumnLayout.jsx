import "../../mobilecss/two-columns.css";
import defaultImage from "../../noimage.png";

const TwoColumnLayout = ({ children, imageSrc, imageAlt }) => {
  return (
    <div className="two-column-layout">
      <div className="text-container">{children}</div>
      <img
        className="image"
        src={imageSrc}
        alt={imageAlt}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
    </div>
  );
};

export default TwoColumnLayout;
