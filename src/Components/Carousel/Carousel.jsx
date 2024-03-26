import Rectangle1 from '../../assets/images/Rectangle1.png'
import sundarban from '../../assets/images/sundorbon.png'
import sajek from '../../assets/images/Sajek.png'
import sreemongol from '../../assets/images/Sreemongol.png'
import { useContext } from 'react';
import { TravelContext } from '../../AuthProvider/AuthProvider';
import BookingCard from '../BookingCard/BookingCard';
const Carousel = () => {

    const { handleSelection, place, isFullDescription, loading, handleBookNow } = useContext(TravelContext);
    const { name, description } = place;
    return (
        <div className='flex gap-x-40 mt-20'>
            {
                loading ?
                    <h2 className='text-lg text-pink-400'>Loading..</h2>
                    :
                    <div className="card max-w-md">
                        <div className="card-body gap-6">
                            <h2 className="card-title text-5xl font-bold text-white">{name}</h2>
                            <p>{isFullDescription ? description : description.slice(0, 190) + '. . .'}</p>
                            <div className="card-actions justify-start">
                                <button onClick={handleBookNow} className="btn btn-accent">Book Now</button>
                            </div>
                        </div>
                    </div>
            }
            {
                isFullDescription ?
                <div>
                    <BookingCard></BookingCard>
                </div>
                    :
                    <div className="carousel carousel-center absolute right-0 max-w-2xl h-80 p-4 space-x-4 rounded-box">
                        <a onClick={handleSelection} id='1' href='#' className="carousel-item relative">
                            <img src={sajek} className="rounded-box hover:border-4 border-orange-800" />
                            <span className='absolute bottom-4 left-2 text-2xl text-white font-bold uppercase tracking-tighter'>Sajek Valley</span>
                        </a>
                        <a onClick={handleSelection} id='2' href='#' className="carousel-item relative">
                            <img src={sreemongol} className="rounded-box hover:border-4 border-orange-800" />
                            <span className='absolute bottom-4 left-2 text-2xl text-white font-bold uppercase tracking-tighter'>Sreemangal</span>
                        </a>
                        <a onClick={handleSelection} id='3' href='#' className="carousel-item relative">
                            <img src={sundarban} className="rounded-box hover:border-4 border-orange-800" />
                            <span className='absolute bottom-4 left-2 text-2xl text-white font-bold uppercase tracking-tighter'>Sundarbans</span>
                        </a>
                        <a onClick={handleSelection} id='4' href='#' className="carousel-item relative">
                            <img src={Rectangle1} className="rounded-box hover:border-4 border-orange-800" />
                            <span className='absolute bottom-4 left-2 text-2xl text-white font-bold uppercase tracking-tighter'>Cox's Bazar</span>
                        </a>
                    </div>

            }
        </div>
    );
};

export default Carousel;