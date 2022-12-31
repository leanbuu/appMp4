import classNames from "classnames/bind";
import styles from '../MenuMedia/MenuMedia.module.scss';
import Media from "../Media";

const cx = classNames.bind(styles);

function MenuMedia( {items =[], isActive }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <>
            { 
            isActive === item.danhmuc && <div className={cx('boc')}>
                    <Media key={item.id} data={item}/> 
            </div>
            }
            </>
        ))
    }
    return ( 
        <div className={cx('menu-media')}>
           {renderItems()}
        </div>
        
     );
}

export default MenuMedia;