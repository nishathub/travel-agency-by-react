import { useContext } from "react";
import { TravelContext } from "../../AuthProvider/AuthProvider";

const PlaceInfo = () => {
    const { places, placeId } = useContext(TravelContext);
    const matchedPlace = places.find(place => place.id == placeId);
    console.log(matchedPlace);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceInfo;