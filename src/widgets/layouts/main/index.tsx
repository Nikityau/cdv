import {Outlet, useLocation} from "react-router-dom";
import Nav from "../../nav";
import Logo from '../../../shared/ui/logo'

const MainLayout = () => {
    const location = useLocation();

    return (
        <div
            className={'main_wrapper'}
            style={{
                background: location.pathname.includes('trips') ? '#915AFF' : 'transparent'
            }}
        >
            <Nav/>
            <Logo/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;