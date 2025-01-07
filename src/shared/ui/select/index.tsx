import {FC, useState} from "react";

import './style.scss'
import cn from "classnames";

type Props = {
    selected: string
    list: string[],
    onSelected: (selected: string) => void,
}

const Select: FC<Props> = ({onSelected, selected, list}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div
            className={cn(
                'select',
                isOpen &&
                'select__open'
            )}
            onClick={() => setIsOpen(!isOpen)}
        >
            <p>{selected}</p>
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10L12.1292 0.25H0.870835L6.5 10Z" fill="#FFF4F2"/>
            </svg>

            <div className={'select_list'}>
                {
                    list.map(item => (
                        <p key={item} onClick={() => {
                            onSelected(item);
                            setIsOpen(false)
                        }}>{item}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Select;