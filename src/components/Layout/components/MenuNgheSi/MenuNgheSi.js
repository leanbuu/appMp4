import classNames from "classnames/bind";
import { useState } from "react";
import styles from '../MenuNgheSi/MenuNgheSi.module.scss';
import NgheSi from "../NgheSi";


const cx = classNames.bind(styles);


function MenuNgheSi({items = []}) {
   console.log(items)
   const [active, setActive] = useState(1);
   const renderItems = () => {
       return items.map((item, index) => (            
                   <NgheSi key={item.id} data={item} bien={active}/>      
       ))
   }
   return ( 
   <div className={cx('carousel')}>
   {renderItems()}
   </div> 
   );
}

export default MenuNgheSi;