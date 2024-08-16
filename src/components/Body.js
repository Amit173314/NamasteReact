import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);
    //setUserName("Amit Test");

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
            <div className="filter flex">
            <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value = {searchText}  onChange={(e) => {
                               setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredListOfRestaurant = listOfRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestaurant(filteredListOfRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() =>
                    {
                        const filteredList = listOfRestaurant.filter(restaurant => restaurant.data.avgRating > 4);
                        setFilteredListOfRestaurant(filteredList);
                    }
                }>
                 Top Rated Restaurant
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
            </div> 
            <div className="flex flex-wrap">
                {
                    filteredListOfRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {
                          restaurant.info.isOpen ? 
                          <PromotedRestaurantCard resData={restaurant.info} />:
                          <RestaurantCard resData={restaurant.info} />
                        }
                    </Link>
                ))
                }
            </div>
        </div>
    );
    };

export default Body;