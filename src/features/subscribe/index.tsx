import './style.scss'
import {useState} from "react";
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/button";


const Subscribe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className={'subscribe'}>
            <div className={'subscribe_header'}>
                <svg width="686" height="111" viewBox="0 0 686 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M683.31 60.7691C686.239 57.8402 686.239 53.0915 683.31 50.1625L635.58 2.43281C632.651 -0.49612 627.903 -0.49612 624.974 2.43281C622.045 5.36174 622.045 10.1105 624.974 13.0394L667.4 55.4658L624.974 97.8922C622.045 100.821 622.045 105.57 624.974 108.499C627.903 111.428 632.651 111.428 635.58 108.499L683.31 60.7691ZM0 62.9658H678.007V47.9658H0L0 62.9658Z"
                        fill="#FFED28"/>
                </svg>
                <div>
                    <p>УЗНАВАЙ ОБ АКЦИЯХ ПЕРВЫМ!</p>
                    <p>УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ ДЛЯ ИЗБРАННЫХ</p>
                </div>
            </div>
            <div className={'main_layout'}>
                <div className={'subscribe_control'}>
                    <Input
                        value={name}
                        onChange={setName}
                        placeholder={'Ваше имя*'}
                    />
                    <Input
                        value={email}
                        onChange={setEmail}
                        placeholder={'Ваш e-mail*'}
                    />
                    <Button>
                        ПОДПИСАТЬСЯ
                    </Button>
                </div>
                <div className={'subscribe_tip'}>
                    <div>
                        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.50342 12.5L15.5034 28L32.0034 2.5" stroke="#FFF4F2" stroke-width="6"/>
                        </svg>
                    </div>
                    <span>
                        Разрешаю обрабатывать мои персональные данные в соответствие с указанной целью их обработки. Политика конфиденциальности
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;