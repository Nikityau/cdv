
import './style.scss'


const Footer = () => {
    return (
        <div
            className={'footer'}>
            <div className={'main_layout'}>
                <div>
                    <h4>compagno di viagg</h4>
                    <span>О компании</span>
                    <span>Контакты</span>
                </div>
                <div>
                    <h4>навигация</h4>
                    <span>Туры</span>
                    <span>Города</span>
                    <span>Профиль</span>
                </div>
                <div className={'footer_last'}>
                    <h4>НАШ ЧАТ-БОТ</h4>
                    <div className={'footer_tg'}>
                        <svg width="83" height="71" viewBox="0 0 83 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M77.7005 2.03711C80.1397 2.03711 81.9798 4.17677 80.9956 8.15654L69.0563 64.4296C68.2218 68.4308 65.804 69.3936 62.4661 67.5321L33.9872 46.4993C33.8768 46.42 33.7868 46.3156 33.7248 46.1947C33.6627 46.0738 33.6303 45.9398 33.6303 45.8039C33.6303 45.6679 33.6627 45.534 33.7248 45.413C33.7868 45.2921 33.8768 45.1877 33.9872 45.1085L66.8738 15.41C68.3716 14.0834 66.5529 13.4415 64.5844 14.6397L23.3103 40.6794C23.1852 40.761 23.043 40.8131 22.8947 40.8316C22.7465 40.8501 22.5959 40.8347 22.4545 40.7864L4.93065 35.2446C1.03646 34.1106 1.03646 31.436 5.80791 29.5317L75.9246 2.48644C76.4806 2.21967 77.0845 2.06689 77.7005 2.03711Z"
                                fill="#270B61" stroke="#FFF4F2" stroke-width="3.48148" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;