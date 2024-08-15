import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

 const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
    })

    const fetchMenuData = async () => {
        const data = await fetch(MENU_URL + resId);
     const jsonData = await data.json();
     setResInfo(jsonData.data);

    }
    return resInfo;
 }

 export default useRestaurantMenu;