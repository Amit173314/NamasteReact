import { CON_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData;
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CON_URL + cloudinaryImageId} 
            ></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    );
}

export default RestaurantCard;