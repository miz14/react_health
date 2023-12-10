import BigButton from "../BigButton/big_button";
import Line from "../Line/line";
import css from "./providers.module.scss";

export default function Providers() {
    return(
        <div className={css.providers_block}>
            <div className={css.img}/>
            <div className={css.text}>
                <h2>Leading healthcare providers</h2>
                <Line className={css.line}/>
                <p>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <div>
                    <BigButton text="Learn more"/>
                </div>

            </div>
        </div>
    )
}