import { FC } from "react";
import css from "./card.module.scss";

interface CardInterface {
    img: string,
    name: string,
    desc: string
}

export const Card: FC<CardInterface> = ({ img, name, desc }) => {

    return (
        <div className={css.service_card_block}>
            <div>
                <img src={img} />
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}