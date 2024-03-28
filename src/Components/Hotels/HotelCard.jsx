
const HotelCard = ({hotelData}) => {
    const {hotel_name, service, location, facilities} = hotelData;
    return (
        <div className="border p-4 w-96">
            <div>
            <h2 className="font-bold">{hotel_name}</h2>
            <p>{service.beds_in_room} beds {service.room_type} room</p>
            <p>{facilities.wifi && 'wifi'} {facilities.kitchen && 'kitchen'}</p>
            <p>{location}</p>
            </div>
        </div>
    );
};

export default HotelCard;