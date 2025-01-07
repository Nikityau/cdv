
import './style.scss'
import {FC} from "react";

type Props = {
    value: string
    onChange: (value: string) => void
    placeholder: string
}

const Input: FC<Props> = ({placeholder, value, onChange}) => {
    return (
        <input
            className={'input_ui'}
            value={value}
            placeholder={placeholder}
            onChange={({target: {value}}) => onChange(value)}
        />
    )
};

export default Input;