import CommentCard from "../CommentCard/comment_card";
import css from "./test.module.scss";

interface CommentData { label: string; name: string; status: string; img: string; comment: string; }


export default function Test(props: {data: CommentData[]}) {
    return(
        <div className={css.slider_container_outer}>
            <div id="slider-container" className={css.slider_container_transition}>
                {props.data.map(({label, name, status, img, comment}) => (
                            <CommentCard key={label} label={label} name={name} status={status} img={img} comment={comment}/>
                ))}
            </div>
        </div>
    )
}