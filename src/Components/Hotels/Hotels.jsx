import { useContext, useEffect, useState } from "react";
import { TravelContext } from "../../AuthProvider/AuthProvider";
import HotelCard from "./HotelCard";
import Navbar from "../Shared/NavBar/Navbar";

const Hotels = () => {
    const { hotels, travelData } = useContext(TravelContext);
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const matchedLocationData = hotels.find(place => place.name?.name == travelData.destination);
        const location = matchedLocationData?.data;
        setLocation(location);
        setLoading(false);

    }, [hotels]);

    console.log(location);



    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                {
                    loading ?
                        <h2>Loading</h2>
                        :
                        <div className=" flex flex-col gap-8"> 
                           {
                            location.map(element => (
                                <div className="" key={element.hotel_name}> 
                                    <HotelCard hotelData = {element}></HotelCard>
                                </div>
                                
                            ))
                           }
                        </div>
                }
            </div>
            <div>
                <h2>map</h2>
            </div>
        </div>
    );
};

export default Hotels;