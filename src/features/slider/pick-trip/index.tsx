import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules'
import lozung from './assets/lozung.png'
import Button from "../../../shared/ui/button";

import './style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import {toursCity} from "../../../pages/cities/data.ts";
import TourCity from "../../../entities/tour-city";
import {Link} from "react-router-dom";

const PickTripSlider = () => {

    return (
        <div className={'pick_trip'}>
            <div className={'pick_trip_lozung'}>
                <img src={lozung} alt={'lozung'}/>
                <Button className={'pick_trip_btn'}>
                    ВЫБРАТЬ ТУР
                </Button>
            </div>
            <div>
                <Swiper

                    modules={[Pagination, Autoplay]}
                    slidesPerView={2.5}
                    spaceBetween={10}
                    pagination={true}
                    loop={true}
                    autoplay={{
                        delay: 1000
                    }}

                    className={'pick_trip_swiper'}
                >
                    {
                        toursCity.map((c, i) => (
                            <SwiperSlide
                                key={i}
                            >
                               <Link to={`/trips/cities/${c.city_title}`}>
                                   <TourCity
                                       city_title={c.city_title}
                                       city_picture={c.city_picture}
                                   />
                               </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PickTripSlider;