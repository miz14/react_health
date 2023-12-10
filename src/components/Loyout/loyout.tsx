import { Outlet } from "react-router-dom";
import MyHeader from "../MyHeader/my_header";
import css from "./loyout.module.scss";
import Services from "../Services/sevices";
import Providers from "../Providers/providers";
import Download from "../Download/download";


export default function Loyout() {
    return (
        <div className={css.loyout_block}>
            <MyHeader/>
            <Services/>
            <Providers/>
            <Download/>
            <Outlet/>
        </div>   
    )
}