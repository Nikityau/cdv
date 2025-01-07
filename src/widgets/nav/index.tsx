import {Link} from "react-router-dom";
import Item from "./ui/item.tsx";
import Button from "../../shared/ui/button";
import {mockLogOut} from "../../shared/api/mock-auth.ts";
import './style.scss'

const Nav = () => {
    return (
        <div className={"nav"}>
            <Link to={'/trips/tours'}>
                <Item text={'Туры'}/>
            </Link>
            <Link to={'/trips/cities'}>
                <Item text={'ГОРОДА'}/>
            </Link>
            {/*<Link to={'/trips/tourists'}>
                <Item text={'ТУРИСТАМ'}/>
            </Link>*/}
            <Link to={'/trips/my-tours'}>
                <Item text={'Мои туры'}/>
            </Link>
            <Button
                onClick={mockLogOut}
                className={'nav_item nav_logout_button'}
            >
                Выход
            </Button>
        </div>
    );
};

export default Nav;