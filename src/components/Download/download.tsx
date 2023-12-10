import BigButton from "../BigButton/big_button";
import css from "./download.module.scss";
import vector from "../../assets/imgs/vector.svg";
import Line from "../Line/line";
export default function Download() {
    return(
        <div className={css.download_block}>
            <div className={css.container}>
                <div className={css.text}>
                    <h2>Download our mobile apps</h2>
                    <Line className={css.line}/>
                    <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                    <BigButton text="Download" icon={vector}/>
                </div>
                <div className={css.img}>

                </div>
            </div>
        </div>
    )
}