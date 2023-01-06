
import classNames from "classnames/bind";
import styles from '../MenuSelect/MenuSelect.module.scss';

import ButtonContent from "../ButtonContent";
import {  useState } from "react";
import MenuMedia from "../MenuMedia";
import { dataSong } from "../../../../dataSong";
import { Link } from "react-router-dom";





const cx = classNames.bind(styles);

function MenuSelect({ items = [] }) {
    const [active, setActive] = useState(2);
    const renderItems = () => {
        return items.map((item, index) => (
            <div className={`${styles.select}`} onClick={() => setActive(item?.id)}>
                <ButtonContent key={item.id} data={item} bien={active}/>
            </div>
        ))
        }

    return ( 
        <>
    <div className={cx('menu-select')}>
    {renderItems()}
    <div className={cx('dis')}>
    <Link to={'/zing'}>
    <button className={cx('btn')}> TẤT CẢ  </button>
    </Link>
    </div>
    </div> 
    <MenuMedia items={dataSong} isActive={active}/>
    </>
    );
}
export default MenuSelect;