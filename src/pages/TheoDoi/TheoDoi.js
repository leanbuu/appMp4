import classNames from "classnames/bind";
import styles from '../TheoDoi/TheoDoi.module.scss';
import BgNen from "../../components/Layout/components/BgNen/BgNen";
import { useContext, useEffect, useState} from "react";
import PlayList from "../../PlayListContext/PlayList";
import ListSong from "../../components/Layout/components/ListSong/ListSong.";
import { dataSong } from "../../dataSong";
import Header from "../../components/Layout/DefaultLayout/Header";
import MenuNgheSi from "../../components/Layout/components/MenuNgheSi";
import ListNgheSi from "../../components/Layout/components/ListNgheSi";
import { dataPlaylist } from "../../dataPlaylist";
import Song from "../../SongContext/Song";



const cx = classNames.bind(styles);
function TheoDoi() {
  
   const playlistContext = useContext(PlayList);
   const { playlist,album } = playlistContext;
   const songContext = useContext(Song)
   const {xoay , song} = songContext;
   const [bien , setBien] = useState(xoay)
   useEffect(() => {
      if(playlist.id === song.album){
         return setBien(xoay)
      }else{
         return setBien('img')
      }
   }, [playlist.id, song.album, xoay])
   

    return ( 
        <>
        <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>
           <div className={cx('playlist')}>
            <div className={cx('left')}>
              <div className={cx('anh')}>
              <img className={cx(bien)} src={playlist.img} alt=''></img>
              </div>
              <div className={cx('title')}>Những Bài Hát Hay Nhất Của {playlist.name}</div>
              <div className={cx('ghichu')}>Cập nhật: 09/12/2022</div>
              <div className={cx('ghichu')} >{playlist.name}</div>
              <div className={cx('ghichu')}>10K người yêu thích</div>
              </div>
              <div className={cx('right')}>
              <div className={cx('mota')}>
                <span style={{color: 'hsl(0deg 0% 100% / 50%)' }}>Lời tựa</span>
                <span style={{color: '#fff'}}> Cùng thưởng thức những bài hát hay nhất của {playlist.name}</span>
              </div>
              <ListSong items={dataSong} isActive={album} /> 
              </div>
           </div>
           <div className={cx('listadd')}>
            <div className={cx('titleadd')}>Có Thể Bạn Quan Tâm</div>
           <ListNgheSi props={<MenuNgheSi items={dataPlaylist} />} />
           </div>
           <BgNen />
          
           </div>
           </div>
        </>
     );
}

export default TheoDoi;