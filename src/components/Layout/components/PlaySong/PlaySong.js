import classNames from "classnames/bind";
import styles from "../PlaySong/PlaySong.module.scss";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import img1 from "../../../../assets/Img-play1.jpg";
import img2 from "../../../../assets/Img-play2.jpg";
import Song from "../../../../SongContext/Song";
import { useContext} from "react";

const cx = classNames.bind(styles);

function PlaySong( ) {
 
  const { thu ,song, handlePlaySong } = useContext(Song);
  // const [volumeText, setVolumeText] = useState("100%");
  // const handlePrev = () => {
  //   handlePlaySong(song.id - 1);
  // };
  // const handleNext = () => {
  //   handlePlaySong(song.id + 1);
  // };

  // const handleAutoPlay = () => {
  //   handlePlaySong(song.id + 1);
  // };
  return (
    <>
      
      <div style={{display : `${thu}` }} className={cx("player")}>
          <div className={cx("play")}>
            <div className={cx("lplay")}>
              <img className={cx('img')} src={song.img} alt=''></img>
              <div className={cx("content")}>
                <div className={cx("name")}>
                  <span>dsfds</span>
                </div>
                <div className={cx("casi")}>
                  <span>Ali Hoàng Dương</span>
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
              <AudioPlayer src={song.src} />
            </div>
            <div className={cx("rplay")}></div>
          </div>
        </div>
      
      
    </>
  );
}

export default PlaySong;
