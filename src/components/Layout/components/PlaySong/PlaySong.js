import classNames from "classnames/bind";
import styles from "../PlaySong/PlaySong.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import img1 from "../../../../assets/Img-play1.jpg";
import img2 from "../../../../assets/Img-play2.jpg";
import img3 from "../../../../assets/Img-play3.jpg";
import img4 from "../../../../assets/Img-play4.jpg";
import img5 from "../../../../assets/Img-play5.jpg";
import img6 from "../../../../assets/Img-play6.jpg";

import Song from "../../../../SongContext/Song";
import { useContext} from "react";


const cx = classNames.bind(styles);

function PlaySong( ) {
 
  const { mopc ,song, handlePlaySong } = useContext(Song);
  // const [volumeText, setVolumeText] = useState("100%");
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
    <>
      
      <div style={{display : `${mopc}` }} className={cx("player")}>
          <div className={cx("play")}>
            <div className={cx("lplay")}>
              <img className={cx('img')} src={song.img} alt=''></img>
              <div className={cx("content")}>
                <div className={cx("name")}>
                  <span>{song.name}</span>
                </div>
                <div className={cx("casi")}>
                  <span>{song.casi}</span>
                </div>
              </div>
              <div className={cx("icon")}>
                <div className={cx("iconl")}>
                  <img src={img1} alt=""></img>
                </div>
                <div className={cx("iconl")}>
                  <img src={img2} alt=""></img>
                </div>
              </div>
            </div>
            <div className={cx("ceplay")}>
              <AudioPlayer 
              src={song.src} 
              showSkipControls={true}
              showJumpControls={false}
              autoPlay={true}
              onEnded={handleAutoPlay}
              onClickPrevious={handlePrev}
              onClickNext={handleNext}
            
              />
            </div>
            <div className={cx("rplay")}>
            <div className={cx("iconl")}>
                  <img src={img3} alt=""></img>
                </div>
                <div className={cx("iconl")}>
                  <img src={img4} alt=""></img>
                </div>
                <div className={cx("iconl")}>
                  <img src={img5} alt=""></img>
                </div>
                <div className={cx("divide")}>
                </div>
                <div className={cx("iconl")}>
                  <img className={cx('imgr')} src={img6} alt=""></img>
                </div>
            </div>
          </div>
        </div>
      
      
    </>
  );
}

export default PlaySong;
