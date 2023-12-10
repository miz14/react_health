import { FC } from "react";
import css from "./big_button.module.scss";


interface BigButtonInterface {
    fill?: boolean,
    text: string,
    icon?: string
}

export const BigButton: FC<BigButtonInterface> = ({fill, text, icon}) => {
    return(
        <button className={css.big_button_block + " " + (fill ? css.big_button_block_filled : css.big_button_block_unfilled)}>
            {icon? 
            <div>
                <span>{text}</span>
                <img src={icon}/>
            </div>
            : text}
        </button>
    )
}

export default BigButton;
