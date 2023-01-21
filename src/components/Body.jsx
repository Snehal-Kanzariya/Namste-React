import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "./config";
import RestauntCard from "./RestauntCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3152082922496&lng=70.76653000262951&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // ? optional channing
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering

  // not render component early return
  if (!allRestaurants) return null;

  // if (filterRestaurants?. length === 0) {
  //   return <h1>No found this Restaurant</h1>
  // }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaturant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {" "}
              <RestauntCard {...restaurant.data} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
