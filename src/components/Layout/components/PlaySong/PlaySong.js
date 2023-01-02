import classNames from "classnames/bind";
import styles from '../PlaySong/PlaySong.module.scss';
import AudioPlayer from  'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css' 
import img1 from '../../../../assets/Img-play1.jpg'
import img2 from '../../../../assets/Img-play2.jpg'


const cx = classNames.bind(styles);



function PlaySong() {
    return ( 
        <div className={cx('player')}>
            <div className={cx("play")}>
              <div className={cx('lplay')}>
                <img src={'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/5/6/2/e562f84593984f548d7ca3aec664f570.jpg'} alt='' className={cx('img')}></img>
                <div className={cx('content')}>
                    <div className={cx('name')}><span>Take My Heart</span></div>
                    <div className={cx('casi')}><span>Ali Hoàng Dương</span></div>
                </div>
                <div className={cx('icon')}>
                    <div className={cx('iconl')}>
                    <img src={img1} alt=''></img>
                    </div>
                    <div className={cx('iconl')}>
                    <img src={img2} alt=''></img>
                    </div>
                </div>
              
              </div>
              <div className={cx('ceplay')}>
                < AudioPlayer/> 
               </div>
               <div className={cx('rplay')}>
                
               </div>
            </div>
        </div>
     );
}

export default PlaySong;