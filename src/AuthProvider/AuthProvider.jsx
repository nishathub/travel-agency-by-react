import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase_config";

export const TravelContext = createContext();

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true);
    // Home Page states
    const [place, setPlace] = useState({});
    const [placeId, setPlaceId] = useState(1);
    const [isFullDescription, setIsFullDescription] = useState(false);

    // Start Booking button
    const handleBookingSubmit = ( origin, destination, departureDate, returnDate) => {
        
        // Handle form submission logic here
        console.log("Origin:", origin);
        console.log("Destination:", destination);
        console.log("Departure Date:", departureDate);
        console.log("Return Date:", returnDate);
    };


    // Home page travel places selection
    const handleSelection = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        setPlaceId(id);
    }

    // Home page booking details button
    const handleBookNow = (e) => {
        console.log('bookNow clicked');
        setIsFullDescription(true);
        e.currentTarget.style.display = 'none';
    }

    // Registration Email Pass auth
    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout User 
    const logoutUser = () => {
       return signOut(auth);
    }

    // Update a user profile 
    const updateUser = (name) => {
       return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    // send reset email 
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // send verification email
    const verifyUser = () => {
       return sendEmailVerification(auth.currentUser);
    }


    useEffect(() => {
        setLoading(true)
        fetch('places.json')
        .then(res => res.json())
        .then(data => {
            const matchedPlace = data.find(place => place.id == placeId);
            setPlace(matchedPlace);
            setLoading(false);
        })
    },[placeId])

    const authInfo = { place, placeId, loading, isFullDescription,handleBookingSubmit, handleSelection, handleBookNow, createNewUser, loginUser, logoutUser,  updateUser, resetPassword, verifyUser};
    return (
        <TravelContext.Provider value={authInfo}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthProvider;