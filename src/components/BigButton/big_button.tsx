import { MouseEventHandler } from "react";
import css from "./big_button.module.scss";


interface BigButtonInterface {
    fill?: boolean,
    text: string,
    icon?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function BigButton(props: BigButtonInterface) {
    return (
        <button onClick={props.onClick} className={css.big_button_block + " " + (props.fill ? css.big_button_block_filled : css.big_button_block_unfilled)}>
            {props.icon ?
                <div>
                    <span>{props.text}</span>
                    <img src={props.icon} />
                </div>
                : props.text}
        </button>
    )
}
