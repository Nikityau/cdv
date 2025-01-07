import {FC} from "react";
import '../style.scss'

type Props = {
    text: string;
}
const Item: FC<Props> = ({text}) => {
    return (
        <div className={'nav_item'}>
            {text}
        </div>
    );
};

export default Item;