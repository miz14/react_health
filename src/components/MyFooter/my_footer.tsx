import Logo from "../Logo/logo";
import css from "./my_footer.module.scss";

export default function MyFooter() {
    return(
        <footer className={css.my_footer_block}>
            <div className={css.container}>
                <div className={css.col1}>
                    <Logo light={true}/>
                    <p className={css.p1}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p>©HealthCare PTY LTD 2023. All rights reserved</p>
                </div>
                <div className={css.col2}>
                    <h4>Company</h4>
                    <div>
                        <a href="">About</a>
                        <a href="">Testimonials</a>
                        <a href="">Find a doctor</a>
                        <a href="">Apps</a>
                    </div>
                </div>
                <div className={css.col2}>
                    <h4>Region</h4>
                    <div>
                        <a href="">Indonesia</a>
                        <a href="">Singapore</a>
                        <a href="">Hongkong</a>
                        <a href="">Canada</a>
                    </div>
                </div>
                <div className={css.col2}>
                    <h4>Help</h4>
                    <div>
                        <a href="">Help center</a>
                        <a href="">Contact support</a>
                        <a href="">Instructions</a>
                        <a href="">How it works</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}