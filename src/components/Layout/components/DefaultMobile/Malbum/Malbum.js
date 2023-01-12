

import classNames from "classnames/bind";
import styles from './Malbum.module.scss'
import { useContext} from "react";
import PlayList from "../../../../../PlayListContext/PlayList";

const cx = classNames.bind(styles);


function Malbum({data, bien}) {
    const playlistContext = useContext(PlayList);
    const { handlePlayList } = playlistContext;
    return (
 
      <div onClick={() => handlePlayList(data.id) }  className={cx('item')}>
      <div className={cx('album')}>
          <img className={cx('img')} alt='' src={data.img}></img>
          <div>
              <div className={cx('title')}>{data.sub}</div>
              <div className={cx('artist')}>{data.name}</div>
          </div>
      </div>
      </div>
      );
}

export default Malbum;