
import Carousel from "../Carousel/Carousel";
import Navbar from "../Shared/NavBar/Navbar";
const Home = () => {

    return (
        <div id="home_page" className="">
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="max-w-6xl mx-auto">
                <div>
                    <Carousel></Carousel>
                </div>
            </div>

        </div>
    );
};

export default Home;