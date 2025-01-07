import cn from 'classnames'
import {FC, PropsWithChildren} from "react";

import './style.scss'

type Props = {
    type?: 'button' | 'submit'
    onClick?: () => void
    className?: string
} & PropsWithChildren

const Button: FC<Props> = ({onClick, className, children,type = 'button'}) => {
    return (
        <button
            type={type}
            className={cn(
                'button_ui',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;