import {FC} from "react";
import './style.scss'
import cn from "classnames";

export type TourCityProps = {
    className?: string
    tour_price?: number
    city_title: string
    city_picture: string,
    withArrow?: boolean
}

const TourCity: FC<TourCityProps> = ({city_title, tour_price, city_picture, className, withArrow = true}) => {
    return (
        <div
            className={cn(
                'city',
                className
            )}
        >
            <div
                className={'city_info'}
                style={{
                    backgroundImage: `url(${city_picture})`
                }}
            >
                <span>{city_title}</span>
                {
                    withArrow &&
                    <div className={'city_arrow'}>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.5" cy="22.5" r="22.5" fill="#915AFF"/>
                            <path
                                d="M9.83505 30.634C9.0806 31.3198 9.025 32.4874 9.71086 33.2419C10.3967 33.9963 11.5643 34.0519 12.3188 33.366L9.83505 30.634ZM33.2287 13.6263C33.2772 12.6078 32.4909 11.7429 31.4724 11.6944L14.8758 10.9041C13.8574 10.8556 12.9925 11.6419 12.944 12.6603C12.8955 13.6788 13.6818 14.5437 14.7002 14.5922L29.4527 15.2947L28.7502 30.0472C28.7017 31.0657 29.488 31.9306 30.5065 31.9791C31.5249 32.0276 32.3899 31.2413 32.4383 30.2229L33.2287 13.6263ZM12.3188 33.366L32.6265 14.9045L30.1427 12.1724L9.83505 30.634L12.3188 33.366Z"
                                fill="white"/>
                        </svg>
                    </div>
                }
            </div>
            {
                tour_price &&
                (
                    <span className={'city_price'}>
                        {tour_price} &#x20bd;
                    </span>
                )
            }
        </div>
    );
};

export default TourCity;