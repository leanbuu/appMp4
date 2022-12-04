import Inner from '../Inner'

import classNames from "classnames/bind";
import styles from '../MenuInner/MenuInner.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);


function MenuInner( {items = []}) {
    const [active, setActive] = useState(1);
    const renderItems = () => {
        return items.map((item, index) => (
            <div className={`${styles.select} ${item?.id === active  ?styles.active:""}`} onClick={() => setActive(item?.id)}>
                <Inner key={item.id} data={item} bien={active}/>
            </div>
        ))
    }
    return ( 
        <div className={cx('menu-inner')}>
         {renderItems()} 
        </div>
     );
}

export default MenuInner;