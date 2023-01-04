
import classNames from "classnames/bind";
import styles from './Msong.module.scss'

import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../../SongContext/Song";


const cx = classNames.bind(styles);

function Msong({data, bien}) {
    const songContext = useContext(Song);
    const { handlePlaySong } = songContext;
    
    return ( 
        <div  onClick={() => handlePlaySong(data.id) } className={cx('item')}>
        <img src={data.img} alt="" className={cx('img')}></img>
        <div className={cx('info')}>
        <div className={cx('title')}>{data.name}</div>
        <div className={cx('artist')}>{data.casi}</div>
        </div>
    </div>
     );
}

export default Msong;