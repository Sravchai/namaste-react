import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - nav items 
 * 
 * Body 
 *  - Search bar 
 *  - Restro Container 
 *      - Restro list 
 * 
 * Footer 
 *  - link
 *  - copy right 
 *  - Company Address 
 */
const Navitem = ()=>{
    return (
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}
const Header = ()=>{
    return(
        <div className="header-container">
            <div className="logo-cotainer">
                <img className = "logo"  src="https://images-workbench.99static.com/LLkcttC9qh00fpRl-s250Te0eDc=/99designs-contests-attachments/84/84933/attachment_84933603"/>
            </div>
            <Navitem/>
        </div>
    );
}

const Search = ()=>{
    return (
        <div className="search-container">
            Search
        </div>
    );
}

const RestroCard  = (props)=>{

    const {resData} = props;
    return (
        <div className="restro-card">
            <img className = "restro-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    );
}

/**
 * Restro Data 
 */

const resList = {
    "restaurants": [
        {
          "info": {
            "id": "537783",
            "name": "Sri Guru Prasad Udipi Hotel",
            "cloudinaryImageId": "gbqwknzghuezuosgm5xj",
            "locality": "Ravinder Nagar",
            "areaName": "Marlu",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Beverages"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
              "restaurantId": "537783",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2200
            },
            "parentId": "193752",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-05 16:10:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sri-guru-prasad-udipi-hotel-ravinder-nagar-marlu-mahbubnagar-537783",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
              "id": "228840",
              "name": "Hotel Nayaab 2",
              "cloudinaryImageId": "nluaf7tzav8g6haneh8u",
              "locality": "Mettugadda",
              "areaName": "Mahbubnagar Locality",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 3.8,
              "feeDetails": {
                "restaurantId": "228840",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2200
              },
              "parentId": "100562",
              "avgRatingString": "3.8",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 11,
                "serviceability": "SERVICEABLE",
                "slaString": "11 mins",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 23:20:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/hotel-nayaab-2-mettugadda-mahbubnagar-locality-mahbubnagar-228840",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "156737",
              "name": "New Amrutha Restaurant",
              "cloudinaryImageId": "mduq4hrc86khd6g2ew82",
              "locality": "Subash Chandrabose Road",
              "areaName": "Marlu",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 3.1,
              "feeDetails": {
                "restaurantId": "156737",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2400
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2400
              },
              "parentId": "145784",
              "avgRatingString": "3.1",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.2,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/new-amrutha-restaurant-subash-chandrabose-road-marlu-mahbubnagar-156737",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "157901",
              "name": "Rakshita Family Restaurant",
              "cloudinaryImageId": "o7egjqqngzzqh988v3jh",
              "locality": "Raichur Road",
              "areaName": "Marlu",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "South Indian"
              ],
              "avgRating": 3.5,
              "feeDetails": {
                "restaurantId": "157901",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2400
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2400
              },
              "parentId": "166220",
              "avgRatingString": "3.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 23:55:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/rakshita-family-restaurant-raichur-road-marlu-mahbubnagar-157901",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "487019",
              "name": "Hotel Sri Raghavendra Udipi",
              "cloudinaryImageId": "hgx6rr4eoyhqmnqecr06",
              "locality": "Venkateshwara Colony",
              "areaName": "Marlu",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "South Indian"
              ],
              "avgRating": 3.9,
              "veg": true,
              "feeDetails": {
                "restaurantId": "487019",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2200
              },
              "parentId": "292250",
              "avgRatingString": "3.9",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 22:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/hotel-sri-raghavendra-udipi-venkateshwara-colony-marlu-mahbubnagar-487019",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "384330",
              "name": "Avanthi Hotel",
              "cloudinaryImageId": "t5unce88s5drseycxahb",
              "locality": "Rajendra Nagar",
              "areaName": "Mahbubnagar Locality",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "South Indian"
              ],
              "avgRating": 4.2,
              "veg": true,
              "feeDetails": {
                "restaurantId": "384330",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2200
              },
              "parentId": "241433",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 22:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/avanthi-hotel-rajendra-nagar-mahbubnagar-locality-mahbubnagar-384330",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "156738",
              "name": "Modern Bakery",
              "cloudinaryImageId": "afkrttzbx0ommerdpf3c",
              "locality": "Ravindra nagar",
              "areaName": "Marlu",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Bakery",
                "American",
                "Pizzas",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 3.5,
              "feeDetails": {
                "restaurantId": "156738",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2200
              },
              "parentId": "8934",
              "avgRatingString": "3.5",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-11-05 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-4b442fae-0847-4765-88ab-e664d9ad2aee"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/modern-bakery-ravindra-nagar-marlu-mahbubnagar-156738",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          }
    ]
};



const Restro = ()=>{
    return (
        <div className="restro-container">
           {resList.restaurants.map(restaurant => <RestroCard key = {restaurant.info.id} resData = {restaurant}/>)}
        </div>
    );
}
const Body = ()=>{
    return (
        <div className="body-container">
        <Search/>
        <Restro/>
        </div>
    );
}

const Applayout = ()=>{
    return (
        <div className="appLayout">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);