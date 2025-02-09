
import './style.scss'
import Nav from "../../widgets/nav";

const UserMe = () => {

    const userName = localStorage.getItem('user_name');

    return (
        <div className={'user_me'}>
            <p>Добро пожаловать, {userName?.slice(0, userName?.indexOf('@'))}</p>
            <Nav
                isAvatar={false}
                className={'user_me_nav'}
            />
        </div>
    );
};

export default UserMe;