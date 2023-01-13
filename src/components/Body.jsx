import { useState } from "react";
import { restaurantList } from "./config";
import RestauntCard from "./RestauntCard";

const Body = () => {
    const [searchText, setSearchText] = useState();
    // toggle
    const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" 
        value={searchText} 
        onChange={(e) => {
            setSearchText(e.target.value);
        }}
        />
        <h1>{searchClicked}</h1>
        <button className="search-btn" onClick={()=> {
            if(searchClicked==="true"){
                setSearchClicked("false");
            }
            else {
                setSearchClicked("true");
            }
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
