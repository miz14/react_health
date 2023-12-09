import css from "./logo.module.scss";

export default function Logo() {

    return(
        <div className={css.logo_block}>
            <div className={css.circle}>T</div>
            <div>HealthCare</div>
        </div>
    )
}