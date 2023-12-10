import { FC } from "react";
import css from "./line.module.scss";

interface LineInterface{
    light?: boolean
    className?: string 
}

export const Line: FC<LineInterface> = ({light, className}) => {
    return(
        <div className={css.line + " " + className + " " + (light? css.line_light : null)}/>
    )
}
export default Line;
