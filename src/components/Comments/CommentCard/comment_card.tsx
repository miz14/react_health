
import Line from "../../Line/line";
import css from "./comment_card.module.scss";

export default function CommentCard(props: {label: string, img: string, name: string, status: string, comment: string}) {
    return(
        <div className={css.comment_card_block}>
            <h1>{props.label}</h1>
            <Line light={true} className={css.line}/>
            <div className={css.person}>
                <div className={css.person_left}>
                    <img src={props.img}/>
                    <div className={css.person_info}>
                        <div className={css.info1}>{props.name}</div>
                        <div className={css.info2}>{props.status}</div>
                    </div>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}