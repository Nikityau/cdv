import PickTripSlider from "../../features/slider/pick-trip";
import BookTrip from "../../features/book-trip";
import BestProposes from "../../features/best-proposes";
import BestHotels from "../../features/best-hotels";
import Reviews from "../../features/reviews";

import './style.scss'
import Subscribe from "../../features/subscribe";
import HelpInfo from "../../features/help-info";
import Footer from "../../widgets/footer";

const MainPage = () => {
    return (
        <div className={'main'}>
            <div className={'main_layout'}>
                <PickTripSlider/>
            </div>
            <BookTrip/>
            <div className={'main_layout'}>
                <BestProposes/>
            </div>
            <HelpInfo/>
            <Subscribe/>
            <BestHotels/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default MainPage;