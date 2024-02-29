import RestaurantCard from "./RestaurantCard";
import restList from "../utils/data";
import { useState } from "react";


const Body=()=>{
  const [restList1,setRestList]=useState(restList)
  return(
    <div className="body">
      <div className="filter-btn"><button className="filter-btn" onClick={()=>{
        const filteredList=restList1.filter((restObj)=>restObj.info.avgRating>4)
        setRestList(filteredList);
        console.log(filteredList);
        
        // console.log("button clicked")
      }}>Top Rated Restaurant</button>
      </div>
      
      <div className="res-container">
        {restList1.map((restObj)=><RestaurantCard key={restObj.info.id} restData={restObj}></RestaurantCard>)}
        
      </div>
      
    </div>
  )
}
export default Body;