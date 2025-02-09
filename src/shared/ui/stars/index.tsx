import {FC} from "react";

import './style.scss'
import cn from "classnames";

type Props = {
    rating: number,
    onPick: (rating: number) => void
}

const Stars: FC<Props> = ({onPick, rating}) => {
    return (
        <div className={'stars'}>
            {
                Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            rating >= i + 1  &&
                            'stars__active'
                        )}
                        onClick={() => onPick(i + 1)}
                    >
                        <svg width="50" height="50" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.45385 1.15019C6.61942 0.640618 7.34033 0.64062 7.5059 1.15019L8.65628 4.69069C8.73032 4.91858 8.94269 5.07287 9.1823 5.07287H12.905C13.4408 5.07287 13.6636 5.7585 13.2301 6.07344L10.2184 8.26158C10.0245 8.40243 9.94341 8.65208 10.0175 8.87996L11.1678 12.4205C11.3334 12.93 10.7502 13.3538 10.3167 13.0388L7.30497 10.8507C7.11112 10.7099 6.84862 10.7099 6.65477 10.8507L3.64304 13.0388C3.20957 13.3538 2.62634 12.93 2.79191 12.4205L3.94229 8.87996C4.01634 8.65208 3.93522 8.40243 3.74137 8.26158L0.729638 6.07343C0.296168 5.7585 0.518944 5.07287 1.05474 5.07287H4.77744C5.01706 5.07287 5.22942 4.91858 5.30347 4.69069L6.45385 1.15019Z"
                                />
                        </svg>
                    </div>
                ))
            }
        </div>
    );
};

export default Stars;