
import classNames from "classnames/bind";
import styles from '../ListMsong/ListMsong.module.scss';
import { useContext } from "react";
import Song from "../../../../../SongContext/Song";
import Msonglist from "../Msonglist/Msonglist";


const cx = classNames.bind(styles);


function ListMsonglist({items =[], isActive}) {
    const { song, songing } = useContext(Song);
    const renderItems = () => {
        let arrFilter = isActive > 0 ? items.filter(item => {
            return item.album === isActive && item.id !== songing
        }) : items
        return arrFilter.map((item, index) => (
            <>
            { 
                    <Msonglist key={item.id} data={item} bien={song.id}/> 
            }
            </>
        ))
    }
    return ( 
        <div className={cx('list')}>
           {renderItems()}
        </div>
        
     );
}
export default ListMsonglist;