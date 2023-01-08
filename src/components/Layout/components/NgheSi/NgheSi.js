
import classNames from "classnames/bind";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PlayList from "../../../../PlayListContext/PlayList";
import styles from '../NgheSi/NgheSi.module.scss';


const cx = classNames.bind(styles);


function NgheSi( { data, bien } ) {
    const playlistContext = useContext(PlayList);
    const { handlePlayList } = playlistContext;
    return ( 
        <Link  className={cx('link')} to={'/theodoi'}>
        <div  onClick={() => handlePlayList(data.id)}  className={cx('card')}>
               <div className={cx('anh')}>
                <img  className={cx('img')} src={data.img} alt=""></img>
                </div>
                <div className={cx('content')}>
                    <div className={cx('sub')}>{data.sub}</div>
                </div>   
        </div>
        </Link>
     );
}

export default NgheSi;