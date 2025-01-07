import {Outlet} from "react-router-dom";

import './style.scss'

import b1 from './assets/bg1.png'

const LBg1 = () => {
    return (
        <div
            className={'lbg1'}
            style={{
                backgroundImage: `url(${b1})`,
            }}
        >
            <Outlet/>
        </div>
    );
};

export default LBg1;