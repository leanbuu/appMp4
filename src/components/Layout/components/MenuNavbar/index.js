
import classNames from "classnames/bind";
import styles from '../MenuNavbar/MenuNavbar.module.scss';
import NavbarItem from "../NavbarItem";

const cx = classNames.bind(styles);


function MenuNavbar({ items = [] }) {
    const renderItems = () =>{
        return items.map((item, index) => (
            <NavbarItem key={index} data={item} />
        ))
    }
    return ( 
    <div className={cx('menu-navbar-item')}>
    {renderItems()}
    </div> 
    );
}

export default MenuNavbar;