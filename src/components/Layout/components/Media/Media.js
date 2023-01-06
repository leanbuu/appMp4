import classNames from "classnames/bind";
import styles from "../Media/Media.module.scss";
import "react-h5-audio-player/lib/styles.css";
import { useContext} from "react";

import Song from "../../../../SongContext/Song";

const cx = classNames.bind(styles);

function Media({ data, bien}) {
  let active = bien;
  const songContext = useContext(Song);
  const { handlePlaySong } = songContext;
 

  return (
    <>
      <div onClick={() => handlePlaySong(data.id)} className={`${styles.media} ${data?.id === active ?styles.active:""}`}>
        <div className={cx("img")}>
          <img className={cx("img-media")} src={data.img} alt=""></img>
        </div>
        <div className={cx("card-info")}>
          <div className={cx("tieude")}>{data.name}</div>
          <div className={cx("casi")}>{data.casi}</div>
          <div className={cx("thoigian")}>{data.time}</div>
        </div>
      </div>
    

      <div >
       
      </div>
    </>
  );
}

export default Media;
