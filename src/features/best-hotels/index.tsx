import './style.scss'
import Button from "../../shared/ui/button";
import {Link} from "react-router-dom";
import {toursCity} from "../../pages/cities/data.ts";
import TourCity from "../../entities/tour-city";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const BestHotels = () => {
    return (
        <div className={'best_hotels'}>
            <div className={'main_layout'}>
                <h3>ОТЕЛИ ПО ЛУЧШЕЙ ЦЕНЕ</h3>
                <div className={'best_hotels_list'}>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        style={{
                            width: '100%'
                        }}
                    >
                        {
                            toursCity.map(t => (
                               <SwiperSlide
                                   key={t.city_title}
                                   style={{
                                       width: 'fit-content'
                                   }}
                               >
                                   <Link to={`/trips/cities/${t.city_title}`}>
                                       <TourCity
                                           city_title={t.city_title}
                                           city_picture={t.city_picture}
                                       />
                                   </Link>
                               </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
                <Link to={`/trips/cities`} className={'best_hotels_btn'}>
                    <Button>
                        ПОКАЗАТЬ БОЛЬШЕ
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BestHotels;