import CommentCard from "./CommentCard/comment_card";
import css from "./comments.module.scss";
import n_person from "../../assets/imgs/n_person.png";
import Test from "./Test/test";
import { useEffect, useState } from "react";

export default function Comments() {

    let data = [
        {
            label: "What our customer are saying (0)",
            name: "Edward Newgate",
            status: "Founder Circle",
            img: n_person,
            comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        },
        {
            label: "What our customer are saying (1)",
            name: "Edward Newgate",
            status: "Founder Circle",
            img: n_person,
            comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        },
        {
            label: "What our customer are saying (2)",
            name: "Edward Newgate",
            status: "Founder Circle",
            img: n_person,
            comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        },
        {
            label: "What our customer are saying (3)",
            name: "Edward Newgate",
            status: "Founder Circle",
            img: n_person,
            comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        }
    ]
    let len = data.length - 1
    const [state, set_state] = useState(0)
    const [left_disable, set_left_disable] = useState(true)
    const [right_disable, set_right_disable] = useState(false)
    function update() {
        var el = document.getElementById("cards_line")
        el? el.style.translate = "-" + state * 100 + "%" : null;
        if (state != 0) {
            set_left_disable(false)
        }
        else set_left_disable(true)
        if (state != len) {
            set_right_disable(false)
        }
        else set_right_disable(true)
    }
    useEffect(() => {
        update()
    }, [state])
    function next() {
        set_state(state + 1)
    }
    function prev() {
        set_state(state - 1)
    }

    return(
        <div className={css.comments_block}>
            <div className={css.container}>
                <div className={css.cards}>
                    <div id="cards_line" className={css.cards_line}>
                        {data.map(({label, name, status, img, comment}) => (
                            <CommentCard key={label} label={label} name={name} status={status} img={img} comment={comment}/>
                        ))}
                        
                    </div>
                </div>
                {/* <CommentCard label={data[0].label} name={data[0].name} status={data[0].status} img={data[0].img} comment={data[0].comment}/> */}
                {/* <Test data={data}/> */}
                <div className={css.slider}>
                    <button id="left_button" disabled={left_disable} className={css.left + " " + (left_disable? css.opacity : "")} onClick={prev}/>
                    <div className={css.nums}>
                        { [0, 1, 2, 3].map((item, index) => <div key={index} className={(item != state? css.opacity : "")}/>) }
                    </div>
                    <button id="right_button" disabled={right_disable} className={css.right + " " + (right_disable? css.opacity : "")} onClick={next}/>
                </div>
            </div>
        </div>
    )
}