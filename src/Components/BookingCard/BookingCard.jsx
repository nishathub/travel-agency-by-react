import { useContext, useState } from 'react';
import { TravelContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const BookingCard = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const {handleBookingSubmit} = useContext(TravelContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBookingSubmit(origin, destination, departureDate, returnDate);
       return navigate('/Hotels');
    };
    return (
        <form onSubmit={handleSubmit} className='p-4 rounded-md bg-black/50 h-fit'>
            <label className='block my-2 font-bold' htmlFor="origin">Origin</label> 
            <select className='p-4 rounded-md w-full' id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                <option value="">Select Origin</option>
                <option value="DHAKA">Dhaka</option>
                <option value="RANGPUR">Rangpur</option>
                <option value="RAJSHAHI">Rajshahi</option>
                {/* Add more options as needed */}
            </select><br />

            <label className='block my-2 font-bold' htmlFor="De">Destination</label> 
            <select className='p-4 rounded-md w-full' id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="">Select Destination</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="SREEMANGAL">SreeMangal</option>
                <option value="SUNDARBANS">Sundarbans</option>
                <option value="SAJEK VALLEY">Sajek valley</option>
                {/* Add more options as needed */}
            </select><br />
            <div className='flex gap-4'>
                <div>
                    <label className='block my-2 font-bold' htmlFor="departureDate">From</label> 
                    <input className='p-4 rounded-md' type="date" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} /><br />
                </div>
                <div>

                    <label className='block my-2 font-bold' htmlFor="returnDate">To</label> 
                    <input className='p-4 rounded-md' type="date" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} /><br />
                </div>
            </div>


            <button className='w-full mt-4 btn btn-accent' type="submit">Submit</button>
        </form>
    );
};

export default BookingCard;