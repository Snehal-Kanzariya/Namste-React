import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./config";

const RestrauntMenu = () => {
  const [restaturant, setRestaturant] = useState(null);

  const parms = useParams();
  // destructuring
  const { id } = parms;
  console.log(parms);

  useEffect(() => {
    getRestaturantInfo();
  }, []);

  async function getRestaturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.3152082922496&lng=70.76653000262951&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaturant(json.data);
  }

  // if (!restaturant) {
  //   return <Shimmer />;
  // }

  return !restaturant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaturant.name}</h2>
        <img src={IMG_CDN_URL + restaturant.cloudinaryImageId} alt="" />
        <h3>
          {restaturant.area}, {restaturant.areaSlug}
        </h3>
        <h3>{restaturant.costForTwoMsg}</h3>
        <h3>{restaturant.avgRating}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaturant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        {/* {restaturant?.menu?.items && (
            <h4>
              {Object.values(restaturant?.menu?.items).map((value) => {
                console.log(`${value}`);
                return <div>{value.name}</div>;
              })}
            </h4>
          )} */}
      </div>
    </div>
  );
};

export default RestrauntMenu;
