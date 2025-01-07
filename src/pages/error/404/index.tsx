import './style.scss'
import Button from "../../../shared/ui/button";
import {Link} from "react-router-dom";

const ErrorPage404 = () => {
    return (
        <div className={'error_404'}>
            <h1>Page Not Found</h1>
            <Link to={'/trips'}>
                <Button>
                    На главную
                </Button>
            </Link>
        </div>
    );
};

export default ErrorPage404;