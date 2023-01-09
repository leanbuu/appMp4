import classNames from "classnames/bind";
import { useContext } from "react";
import { FiMusic } from "react-icons/fi";
import PlayList from "../../../../PlayListContext/PlayList";
import Song from "../../../../SongContext/Song";
import styles from '../SongItem/SongItem.module.scss';




const cx = classNames.bind(styles);

function SongItem({data, bien}) {
    let active = bien;
    const songContext = useContext(Song);
    const { playlist } = useContext(PlayList);
    const { handlePlaySong, moimg } = songContext;
    return ( 
        <div onClick={() => handlePlaySong(data.id)} className={`${styles.songitem} ${data?.id === active ?styles.active:""}`}>
        <div className={cx('itemleft')}>
            <div className={cx('icon')}> <FiMusic /> </div>
            <div className={cx("imgtong")}>
               <div  style={{display : `${moimg}` }} onClick={() => handlePlaySong(data.id)} className={`${styles.img} ${data?.id === active ?styles.active:""}`}>
                  <div  className={cx('i')}></div>
               </div>
               <img src={data.img} className={cx('imga')} alt=''></img>
               </div>
            <div className={cx('info')}>
            <div className={cx('name')}>{data.name}</div>
            <div className={cx('casi')}>{data.casi}</div>
            </div>
        </div>
        <div className={cx('timesong')}>{data.time}</div>
    </div>
     );
}

export default SongItem;