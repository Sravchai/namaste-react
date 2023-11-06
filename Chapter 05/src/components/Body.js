import RestroCard from "./RestroCard";
import Search from "./Search";
import resList from "../utils/mockData";
import {useState} from "react";


const Body = ()=>{

    const [listOfRes, setResList] = useState(resList.restaurants);


    
    return (
        <div className="body-container">
            <Search/>
            
            <div className="button Container">
                <button type="button" onClick={()=>{
                    
                    
                    const filteredList = listOfRes.filter(res=> res.info.avgRating>= 4);
                    setResList(filteredList);

                   

                }}>Filter</button>
            </div>
            
            <div className="restro-container">
                {
                    
                    listOfRes.map(restaurant => <RestroCard key = {restaurant.info.id} resData = {restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;