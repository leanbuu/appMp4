
import classNames from "classnames/bind";
import styles from './Msonglist.module.scss'

import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../../SongContext/Song";


const cx = classNames.bind(styles);

function Msonglist({data, bien}) {
    let active = bien;
    const songContext = useContext(Song);
    const { handlePlaySongadd, moimg } = songContext;
    
    return ( 
        <div  onClick={() => handlePlaySongadd(data.id, data.album) } className={`${styles.item} ${data?.id === active ?styles.active:""}`}>
        <div className={cx('imgtong')}>
        <div style={{display : `${moimg}` }}   className={`${styles.img} ${data?.id === active ?styles.active:""}`}>
           <div className={cx('i')}></div>
        </div>
        <img src={data.img} alt="" className={cx('imga')}></img>
        </div>
        <div className={cx('info')}>
        <div className={cx('title')}>{data.name}</div>
        <div className={cx('artist')}>{data.casi}</div>
        </div>
    </div>
     );
}

export default Msonglist;