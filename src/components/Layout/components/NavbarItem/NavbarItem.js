
import classNames from "classnames/bind";

import styles from './NavbarItem.module.scss';



const cx = classNames.bind(styles);


function NavbarItem({data , bien}) {
    let active = bien;
   
    return ( 
      
        <div title={data.title} className={`${styles.navbar_item} ${data?.id === active ?styles.active:""}`}>
                <div className={cx('icon')}>{data.icon}</div>
                <div className={cx('name')}><span>{data.title}</span></div>
            </div>
        
     );
}

export default NavbarItem;