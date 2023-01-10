
import classNames from "classnames/bind";
import styles from '../ListMsong/ListMsong.module.scss'
import Msong from "../Msong/Msong";
import { useContext } from "react";
import Song from "../../../../../SongContext/Song";


const cx = classNames.bind(styles);


function ListMsong({items =[]}) {
    const { song, list } = useContext(Song);
    const renderItems = () => {
        let arrFilter = 2  ? items.filter(item => {
            return item.danhmuc === 2 && item.id !== list
        }) : items
        return arrFilter.map((item, index) => (
            <>
            {         
                    <Msong key={item.id} data={item} bien={song.id} />
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
export default ListMsong;