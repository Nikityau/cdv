import {FC} from "react";

import './style.scss'

type Props = {
    title: string
}

const AuthByTelegram: FC<Props> = ({title}) => {
    return (
        <div className={'auth_by_tg'}>
            {title}
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="22.5854" cy="21.3058" rx="22.057" ry="20.527" fill="#50397F"/>
                <path
                    d="M30.484 12.0677C31.1422 12.0677 31.6387 12.7208 31.3731 13.9353L28.1517 31.1093C27.9265 32.3304 27.2742 32.6243 26.3736 32.0562L18.6895 25.6372C18.6597 25.613 18.6354 25.5811 18.6187 25.5442C18.6019 25.5073 18.5932 25.4664 18.5932 25.4249C18.5932 25.3834 18.6019 25.3426 18.6187 25.3057C18.6354 25.2688 18.6597 25.2369 18.6895 25.2127L27.5628 16.149C27.9669 15.7442 27.4762 15.5483 26.9451 15.9139L15.8087 23.861C15.7749 23.8859 15.7366 23.9018 15.6966 23.9074C15.6566 23.9131 15.6159 23.9084 15.5778 23.8936L10.8496 22.2024C9.79885 21.8563 9.79885 21.04 11.0863 20.4588L30.0049 12.2049C30.1549 12.1235 30.3178 12.0768 30.484 12.0677Z"
                    fill="#50397F" stroke="#FFF4F2" strokeWidth="0.764005" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default AuthByTelegram;