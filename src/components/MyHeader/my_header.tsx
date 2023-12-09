import BigButton from "../BigButton/big_button";
import Logo from "./Logo/logo";
import Navigation from "./Navigation/navigation";
import css from "./my_header.module.scss";

export default function MyHeader() {

    return(
        <header className={css.my_header_block}>
            <div className={css.container}>
                <div className={css.row_nav}>
                    <Logo/>
                    <Navigation/>
                </div>
                <div className={css.row_desc}>
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
        </header>
    )
}