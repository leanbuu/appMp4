import classNames from "classnames/bind";
import styles from '../TheoDoi/TheoDoi.module.scss';
import BgNen from "../../components/Layout/components/BgNen/BgNen";
import { useContext} from "react";
import PlayList from "../../PlayListContext/PlayList";



const cx = classNames.bind(styles);
function TheoDoi() {
    
   const playlistContext = useContext(PlayList);
   const { playlist} = playlistContext;


    return ( 
        <div>
           <div className={cx('playlist')}>
              <div className={cx('anh')}>
                 <img className={cx('img')} src={playlist.img}></img>
              </div>
           </div>
           <BgNen />
        </div>
     );
}

export default TheoDoi;