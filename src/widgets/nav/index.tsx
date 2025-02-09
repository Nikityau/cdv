import {Link} from "react-router-dom";
import Item from "./ui/item.tsx";
import Button from "../../shared/ui/button";
import {mockLogOut} from "../../shared/api/mock-auth.ts";
import './style.scss'
import {FC} from "react";
import cn from "classnames";

type Props = {
    className?: string,
    isAvatar?: boolean
}

const Nav: FC<Props> = ({isAvatar = true, className}) => {
    return (
        <div className={cn(
            "nav",
            className
        )}>
           <div className={'nav_wrapper'}>
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
            {
                isAvatar &&
                <Link to={'/user/me'}>
                    <div className={'nav_acc'}>
                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.5 16.9578C20.7487 16.9578 22.9054 16.0645 24.4955 14.4744C26.0856 12.8843 26.9789 10.7276 26.9789 8.47889C26.9789 6.23015 26.0856 4.07351 24.4955 2.48341C22.9054 0.893309 20.7487 0 18.5 0C16.2513 0 14.0946 0.893309 12.5045 2.48341C10.9144 4.07351 10.0211 6.23015 10.0211 8.47889C10.0211 10.7276 10.9144 12.8843 12.5045 14.4744C14.0946 16.0645 16.2513 16.9578 18.5 16.9578ZM18.5 20.683C7.22677 20.683 0 26.904 0 29.933V35.589H37V29.933C37 26.27 30.1584 20.683 18.5 20.683Z"
                                fill="#FFF4F2"/>
                        </svg>
                    </div>
                </Link>
            }
        </div>
    );
};

export default Nav;