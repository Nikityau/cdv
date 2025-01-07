import {Navigate, useParams} from "react-router-dom";
import {toursCity} from "../cities/data.ts";
import TourCity from "../../entities/tour-city";

import './style.scss'
import Button from "../../shared/ui/button";

const CityTripPage = () => {
    const {id} = useParams<{ id: string }>()

    const city = toursCity.find(f => f.city_title === id);

    if(!city) return (
        <Navigate to={'/error/404'}/>
    )

    return (
        <div className={'city_trip'}>
            <TourCity
                className={'city_trip_hotel'}
                city_title={'СПА-ОТЕЛЬ ХАЯТ 4*'}
                city_picture={city.city_picture}
                withArrow={false}
            />
            <div className={'city_trip_info'}>
                <h3>СПА-ОТЕЛЬ ХАЯТ 4*</h3>
                <p>{city.city_title}</p>
                <div className={'city_trip_date_pay'}>
                    <div className={'city_trip_wrapper'}>
                        14.10-18.10
                    </div>
                    <div className={'city_trip_wrapper'}>
                        {city.tour_price} рублей
                    </div>
                </div>
                <div className={'city_trip_list'}>
                    <p>Питание: Завтраки - шведский стол</p>
                    <p>Тип номера: Стандарт семейный Трансфер</p>
                    <p>Медицинская страховка</p>
                </div>
                <Button>
                    ЗАБРОНИРОВАТЬ
                </Button>
            </div>
        </div>
    );
};

export default CityTripPage;