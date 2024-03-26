import { createContext, useEffect, useState } from "react";

export const TravelContext = createContext();

const AuthProvider = ({children}) => {

    const [place, setPlace] = useState({});
    const [placeId, setPlaceId] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isFullDescription, setIsFullDescription] = useState(false);

    const handleSelection = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        setPlaceId(id);
    }

    const handleBookNow = (e) => {
        console.log('bookNow clicked');
        setIsFullDescription(true);
        e.currentTarget.style.display = 'none';
    }

    useEffect(() => {
        fetch('places.json')
        .then(res => res.json())
        .then(data => {
            const matchedPlace = data.find(place => place.id == placeId);
            setPlace(matchedPlace);
            setLoading(false);
        })
    },[placeId])

    const authInfo = { place, placeId, loading, isFullDescription, handleSelection, handleBookNow};
    return (
        <TravelContext.Provider value={authInfo}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthProvider;