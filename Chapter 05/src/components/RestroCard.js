import { CDN_URL } from "../utils/constants";

const RestroCard  = (props)=>{

    const {resData} = props;
    return (
        <div className="restro-card">
            <img className = "restro-img" src={ CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    );
}


export default RestroCard