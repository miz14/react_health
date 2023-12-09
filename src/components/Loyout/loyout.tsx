import { Outlet } from "react-router-dom";
import MyHeader from "../MyHeader/my_header";
import css from "./loyout.module.scss";
import Services from "../Services/sevices";


export default function Loyout() {
    return (
        <div className={css.loyout_block}>
            <MyHeader/>
            <Services/>
            <Outlet/>
        </div>   
    )
}