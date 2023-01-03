import classNames from "classnames/bind";
import styles from "../Media/Media.module.scss";
import AudioPlayer from "react-h5-audio-player";
import { useContext, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import { dataSong } from "../../../../dataSong";
import { useLocation, useNavigate } from "react-router-dom";
import Song from "../../../../SongContext/Song";

const cx = classNames.bind(styles);

function Media({ data, bien }) {
  const songContext = useContext(Song);
  const { handlePlaySong, song, dataSong } = songContext;

  const [active, setActive] = useState(false);

  // const { upDateStateMenu } = useContext(Song);
//   const location = useLocation();
//   const { pathname } = location;
//   console.log("check locate :>>", location);

  return (
    <>
      <div onClick={() => handlePlaySong(data.id)} className={cx("media")}>
        <div className={cx("img")}>
          <img className={cx("img-media")} src={data.img} alt=""></img>
        </div>
        <div className={cx("card-info")}>
          <div className={cx("tieude")}>{data.name}</div>
          <div className={cx("casi")}>{data.casi}</div>
          <div className={cx("thoigian")}>{data.time}</div>
        </div>
      </div>
      <div className={`${styles.test} ${active ? styles.active : ""}`}>
        <AudioPlayer src={data.src} />
      </div>
    </>
  );
}

export default Media;
