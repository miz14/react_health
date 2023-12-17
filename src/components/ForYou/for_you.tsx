import BigButton from "../BigButton/big_button";
import css from "./fot_you.module.scss";

export default function ForYou() {
    return(
        <div className={css.for_you_block}>
            <div className={css.container}>
                <div className={css.desc_text}>
                    <h1>Virtual healthcare for you</h1>
                    <p>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <div>
                        <BigButton fill={true} text="Consult today"/>
                    </div>
                </div>
                <div className={css.header_img}>

                </div>
            </div> 
        </div>
    )
}