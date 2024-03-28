import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase_config";

export const TravelContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    // Home Page states
    const [place, setPlace] = useState({});
    const [placeId, setPlaceId] = useState(1);
    const [hotels, setHotels] = useState([]);
    const [travelData, setTravelData] = useState([]);
    const [isFullDescription, setIsFullDescription] = useState(false);
   
    // Start Booking button
    const handleBookingSubmit = (origin, destination, departureDate, returnDate) => {

        // Handle form submission logic here
        console.log("Origin:", origin);
        console.log("Destination:", destination);
        console.log("Departure Date:", departureDate);
        console.log("Return Date:", returnDate);
        setTravelData({origin, destination, departureDate, returnDate});
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
    // Google Login
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook Login
    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
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

    // getting destinations 
    useEffect(() => {
        setLoading(true)
        fetch('places.json')
            .then(res => res.json())
            .then(data => {
                const matchedPlace = data.find(place => place.id == placeId);
                setPlace(matchedPlace);
                setLoading(false);
            })
    }, [placeId])

    // getting hotels
    useEffect(() => {
        setLoading(true)
        fetch('hotels.json')
            .then(res => res.json())
            .then(data => {
                setHotels(data);
                setLoading(false);
            })
    }, [])

    const authInfo = { place, placeId, loading, isFullDescription, hotels, travelData, handleBookingSubmit, handleSelection, handleBookNow, createNewUser, loginUser, loginWithGoogle, loginWithFacebook, logoutUser, updateUser, resetPassword, verifyUser };
    return (
        <TravelContext.Provider value={authInfo}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthProvider;