import css from "./logo.module.scss";

export default function Logo(props: {light?: boolean}) {

    return(
        <div className={css.logo_block}>
            <div className={css.circle + " " + (props.light? css.light_circle : "")}>T</div>
            <div className={(props.light? css.light_text : "")}>HealthCare</div>
        </div>
    )
}