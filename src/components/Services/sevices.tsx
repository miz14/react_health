import BigButton from "../BigButton/big_button";
import { Card } from "./Card/card";
import css from "./services.module.scss";
import {JSX} from "react";


// interface Card_Data {
//     img: string,
//     name: string,
//     desc: string
// }
// const cards_data
// function GetCards(): JSX.Element {
//     return(
//         <List items={}/>
//     )
// }

export default function Services() {
    let card_data = [
        {img: "/src/assets/imgs/serv1.svg", name: "Search doctor", desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
        {img: "/src/assets/imgs/serv2.svg", name: "Online pharmacy", desc: "Buy  your medicines with our mobile application with a simple delivery system"},
        {img: "/src/assets/imgs/serv3.svg", name: "Consultation", desc: "Free consultation with our trusted doctors and get the best recomendations"},
        {img: "/src/assets/imgs/serv4.svg", name: "Details info", desc: "Free consultation with our trusted doctors and get the best recomendations"},
        {img: "/src/assets/imgs/serv5.svg", name: "Emergency care", desc: "You can get 24/7 urgent care for yourself or your children and your lovely family"},
        {img: "/src/assets/imgs/serv6.svg", name: "Tracking", desc: "Track and save your medical history and health data"},
    ]

    return(
        <div className={css.services_block}>
            <div className={css.container}>
                <h2>Our services</h2>
                <div className={css.line}/>
                <p className={css.desc}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                <div className={css.cards}>
                    {card_data.map(({img, name, desc}) => (
                        <Card img={img} name={name} desc={desc}/>
                    ))}
                </div>
                <BigButton text="Learn more"/>
            </div>
        </div>
    )
}