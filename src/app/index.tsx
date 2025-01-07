import './style.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../pages";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
            <div className={'copyright'}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.3395 9.3395C8.97577 9.70283 8.51249 9.95017 8.00822 10.0503C7.50394 10.1503 6.98132 10.0987 6.5064 9.90181C6.03148 9.70494 5.62559 9.37169 5.34002 8.94418C5.05446 8.51668 4.90204 8.01411 4.90204 7.5C4.90204 6.98589 5.05446 6.48332 5.34002 6.05582C5.62559 5.62831 6.03148 5.29506 6.5064 5.09819C6.98132 4.90132 7.50394 4.84966 8.00822 4.94975C8.51249 5.04983 8.97577 5.29717 9.3395 5.6605M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z"
                        stroke="#270B61" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Карина Щербакова, 2025</span>
            </div>
        </BrowserRouter>
    );
};

export default App;