import css from "./line.module.scss";

interface LineInterface {
    light?: boolean
    className?: string
}

export default function Line(props: LineInterface) {
    return (
        <div className={css.line + " " + props.className + " " + (props.light ? css.line_light : null)} />
    )
}
