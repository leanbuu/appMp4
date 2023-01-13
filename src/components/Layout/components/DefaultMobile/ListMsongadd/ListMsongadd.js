
import classNames from "classnames/bind";
import styles from '../ListMsongadd/ListMsongadd.module.scss'
import Msongadd from "../Msongadd/Msongadd";
import { useContext } from "react";
import Song from "../../../../../SongContext/Song";


const cx = classNames.bind(styles);


function ListMsongadd({items =[]}) {
    const { song, list } = useContext(Song);
    const renderItems = () => {
        let arrFilter = 2  ? items.filter(item => {
            return item.danhmuc === 2 && item.id !== list
        }) : items
        return arrFilter.map((item, index) => (
            <>
            {         
                    <Msongadd key={item.id} data={item} bien={song.id} />
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
export default ListMsongadd;