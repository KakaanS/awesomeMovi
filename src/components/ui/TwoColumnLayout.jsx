import "../../mobilecss/two-columns.css"; 
import defaultImage from "../../noimage.png";

const TwoColumnLayout = ({ children, imageSrc, imageAlt }) => {
  return (
    <div className="TwoColumnLayout">
      <div className="TextContainer">{children}</div>
      <img className="Image" src={imageSrc} alt={imageAlt} onError={(e) => { e.target.src = defaultImage; }}/>
    </div>
  );
};

export default TwoColumnLayout;
