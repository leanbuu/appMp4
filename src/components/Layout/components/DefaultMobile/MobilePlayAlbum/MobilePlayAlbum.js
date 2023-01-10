import classNames from "classnames/bind";
import styles from '../MobilePlayAlbum/MobilePlayAlbum.module.scss'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext} from "react";
import "react-h5-audio-player/lib/styles.css";
import Song from "../../../../../SongContext/Song";
import '../custom.css'
import { dataSong } from "../../../../../dataSong";
import PlayList from "../../../../../PlayListContext/PlayList";
import ListMsonglist from "../ListMsonglist";


const cx = classNames.bind(styles);


function MobilePlayAlbum() {
    const playlistContext = useContext(PlayList);
    const { handlePlayList, playlist, album } = playlistContext;
    
    const songContext = useContext(Song);
    const {anlist,xoay,  song ,hat, handleDung,handleXoay, } = songContext;
    const nen = {
        anhNen: {
            backgroundImage: `url(${playlist.img})`
        }
    };
   
//   const handleAutoPlay = () => {
//     handleBat(playlist.id + 1);
//   }
    return ( 
        <div  className={cx('playlist')}>
         <div  className={cx('list')}>
            <div style={nen.anhNen} className={cx('nenanh')}></div>
            <div className={cx('info')}>
                <img className={cx(xoay)} src={playlist.img} alt=''></img>
                <div className={cx('infolist')}>
                    <div className={cx('namelist')}>Những Bài Hát Hay Nhất Của {playlist.name}</div>
                </div>
         <div style={{display: (anlist)}} className={cx('player')}>
         <AudioPlayer  
          src={song.src} 
          showSkipControls={false}
          showJumpControls={true}
          onPause={handleDung}
          onPlay={handleXoay}
          customVolumeControls={[]}
          customAdditionalControls={[]} 
          autoPlayAfterSrcChange={hat}
          />
          </div> 
            </div>
         </div>
          <button onClick={() => handlePlayList(playlist.id)} className={cx('btnback')}>TRỞ LẠI</button>
          <div className={cx('listsong')}>
          <div className={cx('contair')}>
                Danh sách bài hát 
         </div>   
         <ListMsonglist items={dataSong} isActive={album}  ></ListMsonglist>
         </div>      
          
        </div>
     );
}

export default MobilePlayAlbum;