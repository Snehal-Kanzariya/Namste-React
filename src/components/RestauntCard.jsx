import { IMG_CDN_URL } from "./config";

const RestauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food" />
      {/* optional channing ? */}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {avgRating != "--" && <h4 className="rating">{avgRating} stars</h4>}
    </div>
  );
};

export default RestauntCard;
