import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import LBg1 from "../widgets/layouts/lbg1";
import AuthCheck from "../widgets/layouts/auth-check";
import Login from "./auth/login";
import Reg from "./auth/reg";
import MainLayout from "../widgets/layouts/main";
import ErrorPage404 from "./error/404";
import CitiesPage from "./cities";
import CityTripPage from "./city-trip";
import MyToursPages from "./my-tours";
import MainPage from "./main";
import Review from "./review";
import UserMe from "./me";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<LBg1/>}>
                <Route path={'auth'}>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'reg'} element={<Reg/>}/>
                </Route>
                <Route path={'trips'} element={<AuthCheck/>}>
                    <Route path={''} element={<MainLayout/>}>
                        <Route path={''} element={<div className={'main_layout'}><Outlet/></div>}>
                            <Route path={'cities'} element={<CitiesPage/>}/>
                            <Route path={'cities/:id'} element={<CityTripPage/>}/>
                            <Route path={'my-tours'} element={<MyToursPages/>}/>
                            <Route path={'review'} element={<Review/>}/>
                        </Route>
                        <Route path={'tours'} element={<MainPage/>}/>

                        <Route path={''} element={<Navigate to={'tours'}/>}/>
                    </Route>
                </Route>
                <Route path={'user'} element={<AuthCheck/>}>
                    <Route path={'me'} element={<UserMe/>}/>

                    <Route path={''} element={<Navigate to={'me'}/>}/>
                </Route>

                <Route path={''} element={<Navigate to={'/trips/tours'}/>}/>
                <Route path={'*'} element={<ErrorPage404/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;