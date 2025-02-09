import {Link, Navigate, useParams} from "react-router-dom";
import {toursCity} from "../cities/data.ts";
import TourCity from "../../entities/tour-city";

import './style.scss'
import Button from "../../shared/ui/button";
import {useEffect, useState} from "react";
import Input from "../../shared/ui/input";
import cn from "classnames";

const CityTripPage = () => {
    const {id} = useParams<{ id: string }>();
    const [isBooking, setIsBooking] = useState(false);
    const [isOk, setIsOk] = useState(false);

    useEffect(() => {
        if(!isOk) return;

       /* setTimeout(() => {
            setIsOk(false);
            setIsBooking(false);

            [setFio, setEmail, setPhone].forEach(cb => cb(''))
        }, 2000)*/
    }, [isOk])

    const [fio, setFio] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

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
            {
                isOk && (
                    <div className={'city_trip__book__ok'}>
                        <h3>Успешно забронировано</h3>
                        <Link to={'/trips/my-tours'}>
                            <Button>
                                ПЕРЕЙТИ К БРОНИРОВАНИЯМ
                            </Button>
                        </Link>
                    </div>
                )
            }
            {
                !isOk && isBooking && (
                        <div className={'city_trip__book'}>
                            <Input value={fio} onChange={setFio} placeholder={'Введите ФИО*'}/>
                            <Input value={email} onChange={setEmail} placeholder={'Введите e-mail*'}/>
                            <Input value={phone} onChange={setPhone} placeholder={'Введите номер телефона*'}/>
                            <div className={'city_trip__btns'}>
                                <Button className={cn(
                                    (!fio || !email || !phone) && 'lock'
                                )} onClick={() => setIsOk(true)}>
                                    Забронировать
                                </Button>
                                <Button onClick={() => setIsBooking(false)}>
                                    Отмена
                                </Button>
                            </div>
                        </div>
                    )
            }
            {
                !isOk && !isBooking && (
                    (
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
                                <p>Питание: Завтраки - шведский стол</p>
                                <p>Тип номера: Стандарт семейный Трансфер</p>
                                <p>Медицинская страховка</p>
                            </div>
                            <Button onClick={() => setIsBooking(true)}>
                                ЗАБРОНИРОВАТЬ
                            </Button>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default CityTripPage;