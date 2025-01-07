
import './style.scss'
import Button from "../../shared/ui/button";
import Select from "../../shared/ui/select";
import {useState} from "react";

type BookForm = {
    city: string,
    hotel: string,
    date: string,
    nights: string,
    persons: string
}

const CITIES = ['Роза Хутор', 'Пятигорск', 'Тюмень', 'Сочи'];
const HOTELS = ['Azimut 3*', 'Орион', '1001 ночь', '4 сезона'];
const DATES = ['5 окт - 10 окт', '10 нояб - 15 нояб', '15 янв - 25 янв', '6 мая - 10 мая'];
const NIGHTS = ['5 ночей', '10 ночей', '15 ночей'];
const PERSONS = ['2 взрослых', '1 взрослый']

const BookTrip = () => {
    const [state, setState] = useState<BookForm>({
        city: CITIES[0],
        date: DATES[0],
        hotel: HOTELS[0],
        nights: NIGHTS[0],
        persons: PERSONS[0]
    })

    const onChangeSelectTrip = (key: keyof BookForm, value: string) => {
        setState(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <div className={'book_trip'}>
            <div className={'main_layout'}>
                <h3>БРОНИРУЙ ТУРЫ ОНЛАЙН</h3>
                <div className={'book_trip_panel'}>
                    <div>Город:</div>
                    <div>Название отеля:</div>
                    <div>Даты отпуска:</div>
                    <div>Количество ночей:</div>
                    <div>Количество персон:</div>
                    <div className={'book_trip_panel_low_divider'}></div>
                    <div className={'book_trip_panel_border_divider _1'}></div>
                    <div className={'book_trip_panel_border_divider _2'}></div>
                    <div className={'book_trip_panel_border_divider _3'}></div>
                    <div className={'book_trip_panel_border_divider _4'}></div>
                    <Select selected={state.city} list={CITIES} onSelected={v => onChangeSelectTrip('city', v)}/>
                    <Select selected={state.hotel} list={HOTELS} onSelected={v => onChangeSelectTrip('hotel', v)}/>
                    <Select selected={state.date} list={DATES} onSelected={v => onChangeSelectTrip('date', v)}/>
                    <Select selected={state.nights} list={NIGHTS} onSelected={v => onChangeSelectTrip('nights', v)}/>
                    <Select selected={state.persons} list={PERSONS} onSelected={v => onChangeSelectTrip('persons', v)}/>
                </div>
                <div className={'book_trip_panel_button'}>
                   <a href={`/trips/cities/Москва`}>
                       <Button>
                           Подобрать тур
                       </Button>
                   </a>
                </div>
            </div>
            <div className={'book_trip_tip'}>
                <svg width="518" height="112" viewBox="0 0 518 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M515.303 61.3033C518.232 58.3744 518.232 53.6256 515.303 50.6967L467.574 2.96699C464.645 0.0380592 459.896 0.0380592 456.967 2.96699C454.038 5.89592 454.038 10.6447 456.967 13.5736L499.393 56L456.967 98.4264C454.038 101.355 454.038 106.104 456.967 109.033C459.896 111.962 464.645 111.962 467.574 109.033L515.303 61.3033ZM0 63.5L510 63.5V48.5L0 48.5L0 63.5Z"
                        fill="#FFED28"/>
                </svg>
                <div className={'book_trip_tip_wrapper'}>
                    <h4>
                        ПОДДЕРЖКА, ПРЕДЛОЖЕНИЯ И НАПОМИНАНИЯ В ЧАТ-БОТЕ
                    </h4>
                    <div className={'book_trip_tg'}>
                        <svg width="55" height="47" viewBox="0 0 55 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M51.3577 2.12347C52.9492 2.12347 54.1499 3.51957 53.5077 6.11629L45.7175 42.8335C45.173 45.4442 43.5954 46.0724 41.4175 44.8578L22.8356 31.1342C22.7635 31.0825 22.7048 31.0144 22.6643 30.9355C22.6238 30.8566 22.6027 30.7692 22.6027 30.6805C22.6027 30.5918 22.6238 30.5044 22.6643 30.4255C22.7048 30.3466 22.7635 30.2785 22.8356 30.2268L44.2935 10.849C45.2708 9.98346 44.0841 9.56464 42.7997 10.3464L15.8691 27.3369C15.7874 27.3901 15.6947 27.4241 15.5979 27.4362C15.5012 27.4483 15.4029 27.4382 15.3106 27.4067L3.87667 23.7908C1.33578 23.0509 1.33578 21.3058 4.44906 20.0632L50.1989 2.41665C50.5618 2.24259 50.9558 2.14291 51.3577 2.12347Z"
                                fill="#270B61" stroke="#FFF4F2" stroke-width="2.27161" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTrip;