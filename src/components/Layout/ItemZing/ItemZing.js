import classNames from "classnames/bind";
import styles from '../ItemZing/ItemZing.module.scss';
import  {FiMusic}  from 'react-icons/fi';
import { useContext} from "react";

import Song from "../../../SongContext/Song";


const cx = classNames.bind(styles);

function ItemZing({data, bien}) {
  let active = bien;
  const songContext = useContext(Song);
  const { handlePlaySong, moimg } = songContext;
    return ( 
        <div onClick={() => handlePlaySong(data.id)} className={`${styles.item} ${data?.id === active ?styles.active:""}`}>
            <div className={cx('left')}>
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
             <div className={cx('phathanh')}>
                Tháng trước
              </div>
              <div className={cx('time')}>{data.time}</div>
           </div>
      );
}

export default ItemZing;