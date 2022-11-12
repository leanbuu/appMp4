
import classNames from "classnames/bind";
import styles from '../NavbarItem/NavbarItem.module.scss';

const cx = classNames.bind(styles);


function NavbarItem( {data} ) {
    return ( 
            <div className={cx('navbar-item')}>
                <img src={data.img} className={cx('icon')}  alt="" />
                <div className={cx('name')}><span>{data.title}</span></div>
            </div>

     );
}

export default NavbarItem;