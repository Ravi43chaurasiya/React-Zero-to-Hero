import RestaurantCard from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{
  const [restList1,setRestList]=useState([]);
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
    // console.log(json);
    setRestList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestList2(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
   if(restList2.length===0)
   {
    return <Shimmer></Shimmer>
   }
  return(
    <div className="body">
     
      <div className="filter-btn flex justify-between my-3 mx-3">
      <div className="search-container">
        <input className="search-input bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400" type="text" placeholder="type here..." value={searchText} onChange={(e)=>setSearchText(e.target.value) }>

        </input>
        <button className="search-button cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
   onClick={()=>{
          const searchedList=restList1.filter((restObj)=>restObj.info.name.toLowerCase().includes(searchText.toLowerCase()));
          // console.log(searchedList);
          setRestList2(searchedList);
        }}>Search</button>
      </div>
        <button className="filter-btn search-button cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={()=>{
        const filteredList=restList1.filter((restObj)=>restObj.info.avgRating>4)
        setRestList2(filteredList);
        // console.log(filteredList);
        
        // console.log("button clicked")
      }}>Top Rated Restaurant</button>
      </div>
      
      <div className="res-container flex flex-wrap m-3 ml-12 justify-items-start ">
        {restList2.map((restObj)=>
        
        (<Link key={restObj.info.id}  to={"/restaurants/"+restObj.info.id}><RestaurantCard restData={restObj}></RestaurantCard></Link>))
        
      }
        
      </div>
      
    </div>
  )
}
export default Body;