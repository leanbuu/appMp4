
import classNames from "classnames/bind";
import styles from './Msongadd.module.scss'

import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../../SongContext/Song";


const cx = classNames.bind(styles);

function Msong({data, bien}) {
    let active = bien;
    const songContext = useContext(Song);
    const { handleBat } = songContext;
    
    return ( 
        <div  onClick={() => handleBat(data.id) } className={`${styles.item} ${data?.id === active ?styles.active:""}`}>
        <img src={data.img} alt="" className={cx('img')}></img>
        <div className={cx('info')}>
        <div className={cx('title')}>{data.name}</div>
        <div className={cx('artist')}>{data.casi}</div>
        </div>
    </div>
     );
}

export default Msong;