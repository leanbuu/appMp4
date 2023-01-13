
import classNames from "classnames/bind";
import styles from '../MobilePlaySong/MobilePlaySong.module.scss'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext, useEffect, useState} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../../SongContext/Song";
import '../custom.css'
import { dataSong } from "../../../../../dataSong";
import ListMsongadd from "../ListMsongadd";


const cx = classNames.bind(styles);


function MobilePlaySong() {
    const songContext = useContext(Song);
    const { song,list, xoay,bo, handleDung,handleXoay, handlePlaySong, handleBat} = songContext;
    const nen = {
        anhNen: {
            backgroundImage: `url(${song.img})`
        }
    };
  const handleAutoPlay = () => {
    handleBat(song.id + 1);
  }
  const [thongbao, setThongbao] = useState('block')
  const [hat , setHat] = useState('none')
  useEffect(() => {
    if(song.id >= 2 && song.id !== list){
        setThongbao('none')
        setHat('block')
    }
    
  },[song.id, list])
    return ( 
        <div  className={cx('playsong')}>
        <div style={{display : `${thongbao}` }} className={cx('thongbao')}>
            <span className={cx('span')}>
           Chào Mừng Bạn Đến Với Danh Sách Nhạc, Vui Lòng Chọn Nhạc!
           </span>
        </div>


        <div style={{display : `${hat}` }}>
         <div  className={cx('song')}>
            <div style={nen.anhNen} className={cx('nenanh')}></div>
            <div className={cx('info')}>
                <img className={cx(xoay)} src={song.img} alt=''></img>
                <div className={cx('infosong')}>
                    <div className={cx('namesong')}>{song.name}</div>
                    <div className={cx('casisong')}>{song.casi}</div>
                    <div className={cx('time')}>{song.time}</div>
                </div>
            </div>
         </div>
         <div className={cx('player')}>
         <div className={cx('playercon')}>
         <AudioPlayer 
          autoPlayAfterSrcChange={bo} 
          src={song.src} 
          showSkipControls={false}
          showJumpControls={true}
          onEnded={handleAutoPlay}
          onPause={handleDung}
          onPlay={handleXoay}
          customVolumeControls={[]}
          customAdditionalControls={[]} 
          />
          </div>
          </div>
          </div>
          <button onClick={() => handlePlaySong(song.id)} className={cx('btnback')}>TRỞ LẠI</button>
          <div className={cx('contair')}>
                <div style={{fontSize: '18px',marginLeft:'5px', marginBottom: '5px',marginTop: '5px', fontWeight:'700'}}>DANH SÁCH NHẠC</div>
                    <ListMsongadd items={dataSong}></ListMsongadd>
         </div>         
          
        </div>
     );
}

export default MobilePlaySong;