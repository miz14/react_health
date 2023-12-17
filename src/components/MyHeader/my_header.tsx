import BigButton from "../BigButton/big_button";
import Logo from "./Logo/logo";
import Navigation from "./Navigation/navigation";
import css from "./my_header.module.scss";

export default function MyHeader() {

    return(
        <header className={css.my_header_block}>
            <div className={css.container}>
                    <Logo/>
                    <Navigation/>
            </div>
        </header>
    )
}