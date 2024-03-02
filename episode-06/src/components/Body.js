import RestaurantCard from "./RestaurantCard";
import restList from "../utils/data";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
  const [restList1,setRestList]=useState(restList);
  const [restList2,setRestList2]=useState([]);
  const [searchText, setSearchText]=useState("")

  //useEffect()
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async ()=>{
    // this api is for delhi  location.
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setRestList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestList2(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
   if(restList2.length===0)
   {
    return <Shimmer></Shimmer>
   }
  return(
    <div className="body">
     
      <div className="filter-btn">
      <div className="search-container">
        <input className="search-input" type="text" placeholder="type here..." value={searchText} onChange={(e)=>setSearchText(e.target.value) }>

        </input>
        <button className="search-button" onClick={()=>{
          const searchedList=restList1.filter((restObj)=>restObj.info.name.toLowerCase().includes(searchText.toLowerCase()));
          console.log(searchedList);
          setRestList2(searchedList);
        }}>Search</button>
      </div>
        <button className="filter-btn" onClick={()=>{
        const filteredList=restList1.filter((restObj)=>restObj.info.avgRating>4)
        setRestList2(filteredList);
        console.log(filteredList);
        
        // console.log("button clicked")
      }}>Top Rated Restaurant</button>
      </div>
      
      <div className="res-container">
        {restList2.map((restObj)=><RestaurantCard key={restObj.info.id} restData={restObj}></RestaurantCard>)}
        
      </div>
      
    </div>
  )
}
export default Body;