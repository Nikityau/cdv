import './style.scss'
import {useEffect, useState} from "react";
import Input from "../../shared/ui/input";
import Stars from "../../shared/ui/stars";
import {useNavigate} from "react-router-dom";
import Button from "../../shared/ui/button";

const Review = () => {
    const [isReviewSend, setIsReviewSend] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        if (!isReviewSend) return;

        setTimeout(() => {
            nav('/trips/tours')
        }, 2000)
    }, [isReviewSend])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState<string>('')
    const [rating, setRating] = useState<number>(0);

    if (isReviewSend) {
        return (
            <div className={'review_thx'}>
                <p>
                    СПАСИБО ЗА ОТЗЫВ,
                    ЖДЕМ ВАС СНОВА!
                </p>
            </div>
        )
    }

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
            <Button onClick={() => setIsReviewSend(true)}>
                ОСТАВИТЬ ОТЗЫВ
            </Button>
        </div>
    );
};

export default Review;