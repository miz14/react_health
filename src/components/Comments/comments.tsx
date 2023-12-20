import CommentCard from "./CommentCard/comment_card";
import css from "./comments.module.scss";
import n_person from "../../assets/imgs/n_person.png";

export default function Comments() {

    var data = [
        {
            label: "What our customer are saying",
            name: "Edward Newgate",
            status: "Founder Circle",
            img: n_person,
            comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        }
    ]

    return(
        <div className={css.comments_block}>
            <div className={css.container}>
                <CommentCard label={data[0].label} name={data[0].name} status={data[0].status} img={data[0].img} comment={data[0].comment}/>
                <div className={css.slider}>
                    <button className={css.left}/>
                    <div className={css.nums}>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    <button className={css.right}/>
                </div>
            </div>
        </div>
    )
}