import { Outlet } from "react-router-dom";
import MyHeader from "../MyHeader/my_header";
import css from "./loyout.module.scss";
import Services from "../Services/sevices";
import Providers from "../Providers/providers";
import Download from "../Download/download";
import ForYou from "../ForYou/for_you";
import Comments from "../Comments/comments";
import Lastest from "../Lastes/lastes";
import MyFooter from "../MyFooter/my_footer";


export default function Loyout() {
    return (
        <div className={css.loyout_block}>
            <MyHeader/>
            <main>
                <ForYou/>
                <Services/>
                <Providers/>
                <Download/>
                <Comments/>
                <Lastest/>
                <Outlet/>
            </main>
            <MyFooter/>
        </div>   
    )
}