import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    if(listOfRestaurant.length == 0){
        return (<Shimmer />);
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value = {searchText}  onChange={(e) => {
                               setSearchText(e.target.value);
                    }}></input>
                    <button className="filter-btn" onClick={() => {
                        const filteredListOfRestaurant = listOfRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestaurant(filteredListOfRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() =>
                    {
                        const filteredList = listOfRestaurant.filter(restaurant => restaurant.data.avgRating > 4);
                        setFilteredListOfRestaurant(filteredList);
                    }
                }>
                 Top Rated Restaurant
                </button>
            </div> 
            <div className="res-container">
                {
                    filteredListOfRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                       <RestaurantCard resData={restaurant.info} />
                    </Link>
                ))
                }
            </div>
        </div>
    );
    };

export default Body;