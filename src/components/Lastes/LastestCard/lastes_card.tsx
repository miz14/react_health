import css from "./lastest_card.module.scss";

export default function LastestCard(props: { img: string, label: string, disc: string }) {
    return (
        <div className={css.lastest_card_block}>
            <img src={props.img} alt="" />
            <div className={css.content}>
                <h4>{props.label}</h4>
                <p>{props.disc}</p>
                <a href="">Read more</a>
            </div>
        </div>

    )
}
