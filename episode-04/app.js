import React from "react";
import  ReactDOM  from "react-dom/client";
/*
header
  logo
  nav elements
body
  search
  card container
    cards
      img
      name of the restaurant, star rating, cuisine , delivery time
        
footer 
  copyrights
  links
  contacts
  adress
*/
const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp5KrJv-iYMPuxeMFGtdjZKobv20IUFu1fg&usqp=CAU"></img>
      </div>
      <div className="nav-items">
        <ul type="none">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>

      </div>

    </div>
  )
}
const restList=[
  {
      "info": {
          "id": "636723",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Mahanagar",
          "areaName": "Mahanagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "61955",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-29 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹149"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/chinese-wok-mahanagar-lucknow-636723",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "732776",
          "name": "Bikanervala",
          "cloudinaryImageId": "c1b4ddc8b67974a761f6011e3200704c",
          "locality": "Aliganj",
          "areaName": "Mahanagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "North Indian",
              "Chinese",
              "Desserts",
              "South Indian",
              "Sweets"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "45936",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-28 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/bikanervala-aliganj-mahanagar-lucknow-732776",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "76871",
          "name": "Raheem's",
          "cloudinaryImageId": "ir2ijb1ghwqo0jepaxlj",
          "locality": "Chowk",
          "areaName": "Chowk",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Mughlai",
              "Biryani",
              "Kebabs"
          ],
          "avgRating": 4.4,
          "parentId": "9166",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-29 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/raheems-chowk-lucknow-76871",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "347606",
          "name": "Bakingo cake",
          "cloudinaryImageId": "jtuqk0cb3lfjldfav46t",
          "locality": "Sapna Colony",
          "areaName": "Rajajipuram",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery"
          ],
          "avgRating": 3.2,
          "veg": true,
          "parentId": "3818",
          "avgRatingString": "3.2",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 5.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-29 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/bakingo-cake-sapna-colony-rajajipuram-lucknow-347606",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "83224",
          "name": "Al Baike Arabecue",
          "cloudinaryImageId": "gqllu2qnsrawyuk4op5x",
          "locality": "Chowk",
          "areaName": "Chowk",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Snacks",
              "Fast Food",
              "Burgers",
              "Continental",
              "Mughlai",
              "Biryani",
              "American"
          ],
          "avgRating": 4.4,
          "parentId": "28969",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-29 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/al-baike-arabecue-chowk-lucknow-83224",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "84313",
          "name": "Mubeen's",
          "cloudinaryImageId": "ajwonvkychxzkbvyq8dv",
          "locality": "Chowk",
          "areaName": "Chowk",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Mughlai",
              "Kebabs",
              "Biryani"
          ],
          "avgRating": 4.3,
          "parentId": "453541",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-29 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mubeens-chowk-lucknow-84313",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "75188",
          "name": "Punjabi Dhaba(Aliganj)",
          "cloudinaryImageId": "ebfc6a45deec38c12d1acd23fe9a8cef",
          "locality": "Sector A",
          "areaName": "Aliganj",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "North Indian",
              "Thalis",
              "Biryani",
              "Chinese",
              "Snacks",
              "Fast Food",
              "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "487034",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-28 23:05:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/punjabi-dhaba-aliganj-sector-a-aliganj-lucknow-75188",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "165050",
          "name": "Mahalaxmi Sweets & Restaurant",
          "cloudinaryImageId": "oqk0mierg0rlhuxoa3ok",
          "locality": "Aliganj",
          "areaName": "Aliganj",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Sweets",
              "Thalis",
              "North Indian",
              "South Indian",
              "Snacks",
              "Chinese"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "262175",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-28 22:15:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mahalaxmi-sweets-and-restaurant-aliganj-lucknow-165050",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "65084",
          "name": "Alamgir Hotel",
          "cloudinaryImageId": "ruczyhnam8hjwkkzgiwl",
          "locality": "Aminabad",
          "areaName": "Aminabad",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Mughlai"
          ],
          "avgRating": 4.3,
          "parentId": "29676",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-02-28 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-284edb6d-3458-4611-9693-2e9f5df9dbc4"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/alamgir-hotel-aminabad-lucknow-65084",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const RestaurantCard=(props)=>{
  console.log(props);
  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restData.info.cloudinaryImageId}></img>
      <h3>{props.restData.info.name}</h3>
      <h4>{props.restData.info.cuisines.join(",")}</h4>
      <h4>{props.restData.info.avgRating}</h4>
       <h4>{props.restData.info.costForTwo}</h4>

    </div>
  )
}

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restList.map((restObj)=><RestaurantCard key={restObj.info.id} restData={restObj}></RestaurantCard>)}
        
      </div>
      
    </div>
  )
}

const AppLayout=()=>
{
  return(
    <div className="app">
      <Header/>
      <Body></Body>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout></AppLayout>);
// it will render the heading element inside the having id root and replace whatever there in index.html file for that div having id as root.