
import classNames from "classnames/bind";
import styles from '../Inner/Inner.module.scss';
import Song from "../../../../SongContext/Song";
import { useContext } from "react";

const cx = classNames.bind(styles);


function  Inner( {data, bien}) {
    const {handleChuyen } = useContext(Song);
    let active = bien;
    return ( 
        <button onClick={() => handleChuyen(data.id) } className={`${styles.select} ${data?.id === active ?styles.active:""}`}>
            <div className={cx('title')}>{data.name}</div>
        </button>
     );
}

export default  Inner;