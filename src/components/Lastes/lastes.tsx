import Line from '../Line/line';
import LastestCard from './LastestCard/lastes_card';
import css from './lastes.module.scss';
import img1 from "../../assets/imgs/lastes1.png";
import img2 from "../../assets/imgs/lastes2.png";
import img3 from "../../assets/imgs/lastes3.png";
import BigButton from '../BigButton/big_button';

export default function Lastest() {
    let data = [
        {id: 1, img: img1, label: "Disease detection, check up in the laboratory", disc: "In this case, the role of the health laboratory is very important to do a disease detection..."},
        {id: 2, img: img2, label: "Herbal medicines that are safe for consumption", disc: "Herbal medicine is very widely used at this time because of its very good for your health..."},
        {id: 3, img: img3, label: "Natural care for healthy facial skin", disc: "A healthy lifestyle should start from now and also for your skin health. There are some..."},
        
    ]
    return(
        <div className={css.lastes_block}>
            <div className={css.container}>
                <h2>Check out our latest article</h2>
                <Line className={css.line}/>
                <div className={css.cards}>
                    {data.map(({id, img, label, disc}) => (
                        <LastestCard key={id} img={img} label={label} disc={disc}/>
                    ))}
                </div>
                <BigButton text='View all'/>
            </div>
            
        </div>
    )
}