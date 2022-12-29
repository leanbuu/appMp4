import classNames from "classnames/bind";
import styles from '../Media/Media.module.scss'
import AudioPlayer from  'react-h5-audio-player';
import { useState } from "react";
import 'react-h5-audio-player/lib/styles.css' 

const cx = classNames.bind(styles);


function Media({img, ten, casi, thoigian, src}) {
   const [active, setActive] = useState(false)
   function offMusic() {
   setActive(false);
   }
   function onMusic() {
   setActive(!active);
   }
    return ( 
        <>
        <div className={cx('media')}>
         <div onClick={onMusic} className={cx('img')}><img className={cx('img-media')} src={img} alt="" ></img></div>
            <div className={cx('card-info')}>
                <div className={cx('tieude')}>{ten}</div>
                <div className={cx('casi')}>{casi}</div>
                <div className={cx('thoigian')}>{thoigian}</div>
            </div>
           
        </div>
        <div className={`${styles.test} ${active ?styles.active:""}`}>
           < AudioPlayer
              src={src}
            /> 
          </div>
         
          </>
    );
}

export default Media;
