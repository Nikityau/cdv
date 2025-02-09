import './style.scss'


const HelpInfo = () => {
    return (
        <div className={'help_info'}>
            <div className={'main_layout'}>
                <div className={'help_item'}>
                    <svg width="88" height="96" viewBox="0 0 88 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 43.6669H18C20.2985 43.6669 22.5029 44.58 24.1283 46.2053C25.7536 47.8306 26.6667 50.035 26.6667 52.3336V65.3336C26.6667 67.6321 25.7536 69.8365 24.1283 71.4618C22.5029 73.0871 20.2985 74.0002 18 74.0002H13.6667C11.3681 74.0002 9.16372 73.0871 7.53841 71.4618C5.91309 69.8365 5 67.6321 5 65.3336V43.6669ZM5 43.6669C5 38.5453 6.00876 33.4739 7.9687 28.7422C9.92863 24.0105 12.8014 19.7112 16.4228 16.0897C20.0443 12.4683 24.3436 9.59553 29.0753 7.6356C33.807 5.67567 38.8784 4.6669 44 4.6669C49.1216 4.6669 54.193 5.67567 58.9247 7.6356C63.6564 9.59553 67.9557 12.4683 71.5772 16.0897C75.1986 19.7112 78.0714 24.0105 80.0313 28.7422C81.9912 33.4739 83 38.5453 83 43.6669M83 43.6669V65.3336M83 43.6669H70C67.7015 43.6669 65.4971 44.58 63.8717 46.2053C62.2464 47.8306 61.3333 50.035 61.3333 52.3336V65.3336C61.3333 67.6321 62.2464 69.8365 63.8717 71.4618C65.4971 73.0871 67.7015 74.0002 70 74.0002H74.3333C76.6319 74.0002 78.8363 73.0871 80.4616 71.4618C82.0869 69.8365 83 67.6321 83 65.3336M83 65.3336V74.0002C83 78.5973 81.1738 83.0061 77.9232 86.2568C74.6726 89.5074 70.2638 91.3336 65.6667 91.3336H44"
                            stroke="#915AFF" stroke-width="8.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <span>круглосуточная поддержка</span>
                        <p>Помощь в подборе туров, простота бронирования,
                            личный кабинет</p>
                    </div>
                </div>
                <div className={'help_item'}>
                    <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M48.9999 22.4998V48.9998H68.8749M93.1666 48.9998C93.1666 73.3924 73.3925 93.1665 48.9999 93.1665C24.6073 93.1665 4.83325 73.3924 4.83325 48.9998C4.83325 24.6073 24.6073 4.83318 48.9999 4.83318C73.3925 4.83318 93.1666 24.6073 93.1666 48.9998Z"
                            stroke="#915AFF" stroke-width="8.83333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <span>напоминания о  турах</span>
                        <p>Напоминание о предстоящем отдыхе в чат-боте в Телеграм</p>
                    </div>
                </div>
                <div className={'help_item'}>
                    <svg width="88" height="96" viewBox="0 0 88 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.6667 4.66682V22.0002M61.3333 4.66682V22.0002M5 39.3335H83M52.6667 56.6668L35.3333 74.0002M35.3333 56.6668L52.6667 74.0002M13.6667 13.3335H74.3333C79.1198 13.3335 83 17.2137 83 22.0002V82.6668C83 87.4533 79.1198 91.3335 74.3333 91.3335H13.6667C8.8802 91.3335 5 87.4533 5 82.6668V22.0002C5 17.2137 8.8802 13.3335 13.6667 13.3335Z"
                            stroke="#915AFF" stroke-width="8.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <span>отмена туров онлайн</span>
                        <p>Возможность бесплатно онлайн отменить тур Никаких рисков!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpInfo;