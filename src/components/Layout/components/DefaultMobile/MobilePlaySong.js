
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import img1 from '../../../../assets/Img-album3.jpg'
import AudioPlayer from "react-h5-audio-player";
import { BsFillPlayFill, BsPause, BsPauseFill } from "react-icons/bs";
import "react-h5-audio-player/lib/styles.css";
import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../SongContext/Song";
import './custom.css'
import FooterMobile from "./FooterMobie";
import icon from '../../../../assets/Icon-widget.png';


const cx = classNames.bind(styles);



const nen = {
    anhNen: {
        backgroundImage: `url(${'https://photo-resize-zmp3.zmdcdn.me/w256_r1x1_jpeg/cover/d/2/7/0/d270c66cefbc55e1c3adacb416508c8e.jpg'})`
    }
};

function MobilePlaySong() {
    const songContext = useContext(Song);
    const { song, mo, handlePlaySong} = songContext;
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
         
         customIcons={{
            play: <BsFillPlayFill />,
            pause: <BsPauseFill />,
          }}
          showSkipControls={false}
          showJumpControls={true}
          autoPlay={true}
          customVolumeControls={[]}
          customAdditionalControls={[]} />
          </div>
          <button onClick={() => handlePlaySong(song.id)} className={cx('btnback')}>TRỞ LẠI</button>
          <div style={{marginTop: '150px'}}>
          <FooterMobile></FooterMobile>
          </div>
          
          <div  className={cx('widget')}>
                        <img className={cx('img')} src={icon} alt=''></img>
                        <span className={cx('title')}>Trải nghiệm Zing MP3 tốt nhất trên app</span>
                    </div>
        </div>
     );
}

export default MobilePlaySong;