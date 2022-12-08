import classNames from "classnames/bind";
import styles from '../MenuActive/MenuActive.module.scss';
import ItemActive from "../ItemActive";

import { useState } from "react";

const cx = classNames.bind(styles);

function MenuActive({items = []}) {
   const [active, setActive] = useState(1);
    const renderItems = () => {
        return items.map((item, index) => (
                <div className={`${styles.itemactive} ${item?.id === active  ?styles.active:""}`} onClick={() => setActive(item?.id)}>
                    <ItemActive key={item.id} data={item} bien={active}/>
                </div>
        ))
    }
    return ( 
    <div className={cx('menu-active')}>
    {renderItems()}
    </div> 
    );
}


export default MenuActive;