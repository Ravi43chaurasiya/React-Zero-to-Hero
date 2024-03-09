import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  console.log(props);
  return (
    <div className="res-card w-64  border-2 border-amber-950 rounded-lg m-3 flex flex-col justify-between">
    <img alt="res-logo" className="res-logo h-44 w-64 " src={CDN_URL+props.restData.info.cloudinaryImageId}></img>
    <div className="p-2">
        <h3 className="text-xl font-bold truncate" >{props.restData.info.name}</h3>
        <h5 className="text-sm truncate">{props.restData.info.cuisines.join(", ")}</h5>
        <h4 className="text-lg">{props.restData.info.avgRating} stars</h4>
        <h4 className="text-lg">Cost for two: {props.restData.info.costForTwo}</h4>
    </div>
</div>

  )
}
export default RestaurantCard;