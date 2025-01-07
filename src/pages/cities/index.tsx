import {toursCity} from "./data.ts";
import TourCity from "../../entities/tour-city";

import {Link} from "react-router-dom";

import './style.scss';

const CitiesPage = () => {
    return (
        <div className={'cities_list'}>
            {
                toursCity.map((tour, i) => (
                    <Link
                        to={`/trips/cities/${tour.city_title}`}
                        key={i}
                    >
                        <TourCity
                            {...tour}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default CitiesPage;