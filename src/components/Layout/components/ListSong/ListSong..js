import classNames from "classnames/bind";
import { useContext } from "react";
import { FiMusic } from "react-icons/fi";
import PlayList from "../../../../PlayListContext/PlayList";
import Song from "../../../../SongContext/Song";
import styles from '../ListSong/ListSong.module.scss';
import SongItem from "../SongItem/SongItem";
;



const cx = classNames.bind(styles);
function ListSong({items=[], isActive}) {
   const { song } = useContext(Song);
   const renderItems = () => {
    return items.map((item, index) => (
        <>
        { 
        isActive === item.album &&
                <SongItem key={item.id} data={item} bien={song.id}/> 
        }
        </>
    ))
}
  return ( 
        <div className={cx('playlist')}>
            <div className={cx('header')}>
               <div className={cx("baihat")}>
                <span style={{marginLeft: '26px'}}>BÀI HÁT</span>
               </div>
               <div className={cx('time')}>THỜI GIAN</div>
            </div>
            {renderItems()}
        </div>
     );
}

export default ListSong;
