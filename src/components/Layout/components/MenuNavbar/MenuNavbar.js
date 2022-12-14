
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../MenuNavbar/MenuNavbar.module.scss';
import NavbarItem from "../NavbarItem/NavbarItem";

const cx = classNames.bind(styles);

function MenuNavbar({ items = [] }) {
    const [active, setActive] = useState(2);
    const renderItems = () => {
        return items.map((item, index) => (
            <>
                {item.id === 6 && <div className={cx('divive')}></div>}
                <Link className={cx('link')} to={item.to}>
                <div className={`${styles.navbar} ${item?.id === active  ?styles.active:""}`} onClick={() => setActive(item?.id)}>
                    <NavbarItem key={item.id} data={item} bien={active}/>
                </div>
                </Link>
            </>
        ))
    }
    return ( 
    <div className={cx('menu-navbar-item')}>
    {renderItems()}
    </div> 
    );
}

export default MenuNavbar;