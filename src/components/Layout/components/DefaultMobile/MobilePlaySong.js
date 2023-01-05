
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import img1 from '../../../../assets/Img-album3.jpg'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../SongContext/Song";
import './custom.css'
import icon from '../../../../assets/Icon-widget.png';
import { dataSong } from "../../../../dataSong";
import ListMsongadd from "./ListMsongadd";


const cx = classNames.bind(styles);





function MobilePlaySong() {
    const songContext = useContext(Song);
    const { song, mo, handlePlaySong} = songContext;
    const nen = {
        anhNen: {
            backgroundImage: `url(${song.img})`
        }
    };
    const handlePrev = () => {
    handlePlaySong(song.id - 1);
  };
  const handleNext = () => {
    handlePlaySong(song.id + 1);
  };

  const handleAutoPlay = () => {
    handlePlaySong(song.id + 1);
  };
    return ( 
        <div  className={cx('playsong')}>
         <div  className={cx('song')}>
            <div style={nen.anhNen} className={cx('nenanh')}></div>
            <div className={cx('info')}>
                <img className={cx('imgsong')} src={song.img} alt=''></img>
                <div className={cx('infosong')}>
                    <div className={cx('namesong')}>{song.name}</div>
                    <div className={cx('casisong')}>{song.casi}</div>
                    <div className={cx('time')}>{song.time}</div>
                </div>
            </div>
         </div>
         <div className={cx('player')}>
         <AudioPlayer  
          src={song.src} 
          showJumpControls={true}
          autoPlay={true}
          onEnded={handleAutoPlay}
          customVolumeControls={[]}
          customAdditionalControls={[]} 
          />
          </div>
          <button onClick={() => handlePlaySong(song.id)} className={cx('btnback')}>TRỞ LẠI</button>
          <div className={cx('contair')}>
                <div style={{fontSize: '18px', marginBottom: '5px',marginTop: '5px', fontWeight:'700'}}>DANH SÁCH NHẠC</div>
                    <ListMsongadd items={dataSong}></ListMsongadd>
         </div>         
          <div  className={cx('widget')}>
                        <img className={cx('img')} src={icon} alt=''></img>
                        <span className={cx('title')}>Trải nghiệm Zing MP3 tốt nhất trên app</span>
                    </div>
        </div>
     );
}

export default MobilePlaySong;