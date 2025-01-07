import './style.scss'
import {useState} from "react";
import Input from "../../shared/ui/input";
import Stars from "../../shared/ui/stars";
import {Link} from "react-router-dom";
import Button from "../../shared/ui/button";

const Review = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState<string>('')
    const [rating, setRating] = useState<number>(0);

    return (
        <div className={'main_layout review'}>
            <h1>Как прошла ваша поездка?</h1>
            <Input value={name} onChange={setName} placeholder={'Введите ФИО*'}/>
            <Input value={email} onChange={setEmail} placeholder={'Введите e-mail*'}/>
            <div className={'review_rating'}>
                <span>ОЦЕНИТЕ ПОЕЗДКУ:</span>
                <Stars
                    rating={rating}
                    onPick={setRating}
                />
            </div>
            <div className={'review_text'}>
                <p>ПОДЕЛИТЕСЬ СВОИМИ ВПЕЧАТЛЕНИЯМИ:</p>
                <textarea
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    style={{
                        resize: 'none',
                    }}
                />
            </div>
            <Link to={'/trips/tours'} className={'review_btn'}>
                <Button>
                    ОСТАВИТЬ ОТЗЫВ
                </Button>
            </Link>
        </div>
    );
};

export default Review;