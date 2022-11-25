
import classNames from "classnames/bind";
import { useState } from "react";
import styles from '../MenuNavbar/MenuNavbar.module.scss';
import NavbarItem from "../NavbarItem/NavbarItem";

const cx = classNames.bind(styles);

function MenuNavbar({ items = [] }) {
    const [active, setActive] = useState(1);
    const renderItems = () => {
        return items.map((item, index) => (
            <div className={`${styles.navbar} ${item?.id === active  ?styles.active:""}`} onClick={() => setActive(item?.id)}>
                <NavbarItem key={item.id} data={item} bien={active}/>
            </div>
        ))
    }
    return ( 
    <div className={cx('menu-navbar-item')}>
    {renderItems()}
    </div> 
    );
}

export default MenuNavbar;