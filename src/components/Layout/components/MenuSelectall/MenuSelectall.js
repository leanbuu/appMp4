
import classNames from "classnames/bind";
import styles from '../MenuSelectall/MenuSelectall.module.scss'

import ButtonContent from "../ButtonContent";
import { useState, useContext } from "react";
import MenuMedia from "../MenuMedia";
import { dataSong } from "../../../../dataSong";
import ListZing from "../../ListZing/ListZing";
import Song from "../../../../SongContext/Song";






const cx = classNames.bind(styles);

function MenuSelectall({ items = [] }) {
    const [active , setActive] = useState(2);
    const songContext = useContext(Song);
    const { ac , truyen } = songContext;
    const renderItems = () => {
        return items.map((item, index) => (
            <div className={`${styles.select}`} onClick={() => truyen(item.id)}>
                <ButtonContent key={item.id} data={item} bien={ac}/>
            </div>
        ))
        }

    return ( 
        <>
    <div className={cx('menu-select')}>
    {renderItems()}
    <div className={cx('dis')}>
    
    </div>
    </div> 
    </>
    );
}
export default MenuSelectall;