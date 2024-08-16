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
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CON_URL + cloudinaryImageId} 
            ></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    );
}
//High order components
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;