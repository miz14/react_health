import { FC } from "react";
import css from "./big_button.module.scss";


interface BigButtonInterface {
    fill?: boolean,
    text: string
}

export const BigButton: FC<BigButtonInterface> = ({fill, text}) => {
    return(
        <button className={css.big_button_block + " " + (fill ? css.big_button_block_filled : css.big_button_block_unfilled)}>
            {text}
        </button>
    )
}

export default BigButton;
