import classNames from "classnames/bind";
import styles from '../MenuMedia/MenuMedia.module.scss';
import Media from "../Media";
import { useContext } from "react";
import Song from "../../../../SongContext/Song";

const cx = classNames.bind(styles);

function MenuMedia( {items =[], isActive }) {

    const { song } = useContext(Song);
    const renderItems = () => {
        let arrFilter = isActive > 1 ? items.filter(item => {
            return item.danhmuc === isActive && item.id < 18
        }) : items
        return arrFilter.map((item, index) => (
            <>
            { 
              <div className={cx('boc')}>
                    <Media key={item.id} data={item} bien={song.id}/> 
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