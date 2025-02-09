import './style.scss'
import TourCity from "../../entities/tour-city";
import {toursCity} from "../cities/data.ts";
import Button from "../../shared/ui/button";


const MyToursPages = () => {
    return (
        <div className={'my_tours'}>
            <h3>Мои туры</h3>
            <p>Забронировано 2 тура</p>
            <div className={'my_tours_list'}>
                {
                    Array.from({ length: 2}).map((_,i) => (
                        <div
                            key={i}
                            className={'my_tours_tour'}
                        >
                            <TourCity
                                className={'my_tours_city'}
                                city_title={''}
                                city_picture={toursCity[i].city_picture}
                                withArrow={false}
                            />
                            <h5>{toursCity[i].city_title}</h5>
                            <span>14-18 НОЯБРЯ</span>
                            <span>2 персоны</span>
                            <span className={'my_tours_hotel'}>“СПА-ОТЕЛЬ ХАЯТ”</span>
                            <Button
                                className={'my_tours_btn'}
                            >
                                ОТМЕНА БРОНИ
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyToursPages;