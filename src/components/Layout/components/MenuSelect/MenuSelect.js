
import classNames from "classnames/bind";
import styles from '../MenuSelect/MenuSelect.module.scss';

import ButtonContent from "../ButtonContent";
import { useState } from "react";

const cx = classNames.bind(styles);

function MenuSelect({ items = [] }) {
    const [active, setActive] = useState(1);
    const renderItems = () => {
        return items.map((item, index) => (
            <div className={`${styles.select} ${item?.id === active  ?styles.active:""}`} onClick={() => setActive(item?.id)}>
                <ButtonContent key={item.id} data={item} bien={active}/>
            </div>
        ))
    }
    return ( 
    <div className={cx('menu-select')}>
    {renderItems()}
    <div className={cx('dis')}>
    <button className={cx('btn')}> TẤT CẢ  </button>
    </div>
    </div> 
    );
}
export default MenuSelect;