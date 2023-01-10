
import classNames from "classnames/bind";
import styles from '../MenuMalbum/MenuMalbum.module.scss';



import { useState } from "react";
import Malbum from "../DefaultMobile/Malbum/Malbum";

const cx = classNames.bind(styles);

function MenuMalbum({items = []}) {
  // eslint-disable-next-line
    const [active, setActive] = useState(1);
    const renderItems = () => {
        
        return items.map((item, index) => (
           <> 
            {
              5 > item.id &&
            <Malbum key={item.id} data={item} bien={active}/>     
            } 
            </>
        ))
    }
    return ( 
    <div className={cx('menu-album')}>
    {renderItems()}
    </div> 
    );
 }

export default MenuMalbum;