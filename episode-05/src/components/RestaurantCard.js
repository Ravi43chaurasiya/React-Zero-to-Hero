import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  console.log(props);
  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={CDN_URL+props.restData.info.cloudinaryImageId}></img>
      <h3>{props.restData.info.name}</h3>
      <h5>{props.restData.info.cuisines.join(",")}</h5>
      <h4>{props.restData.info.avgRating}</h4>
       <h4>{props.restData.info.costForTwo}</h4>

    </div>
  )
}
export default RestaurantCard;