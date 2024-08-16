import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);
    

     if(resInfo == null)
        return <Shimmer />;
     const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const itemCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x.card?.["card"]?.["@type"] == 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


return (
    <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
        {itemCategory.map((category, index) => 
        //Controlled component
        <RestaurantCategory 
           key = {category?.card?.card?.title} 
           data = { category?.card?.card }
           showItems = {index == showIndex ? true : false}
           setShowIndex = {() => setShowIndex(index)}
        />
        )}

    </div>
    )
};

export default RestaurantMenu;