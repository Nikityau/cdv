
import './style.scss'
import {toursCity} from "../../pages/cities/data.ts";
import {Link} from "react-router-dom";
import TourCity from "../../entities/tour-city";
import Button from "../../shared/ui/button";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const BestProposes = () => {
    return (
        <div className={'best_proposes'}>
            <div className={'best_proposes_list'}>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    style={{
                        width: '100%'
                    }}
                >
                    {
                        toursCity.map((city) => (
                            <SwiperSlide
                                key={city.city_title}
                                style={{
                                    width: '300px'
                                }}
                            >
                                <Link to={`/trips/cities/${city.city_title}`}>
                                    <TourCity
                                        city_title={city.city_title}
                                        city_picture={city.city_picture}
                                        tour_price={city.tour_price}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <Link to={'/trips/cities'}>
                <Button className={'best_proposes_btn'}>
                    ПОКАЗАТЬ БОЛЬШЕ
                </Button>
            </Link>
        </div>
    );
};

export default BestProposes;