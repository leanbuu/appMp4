
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import MobileHeader from "./MobileHeader";
import icon from '../../../../assets/Icon-widget.png';

import MenuInner from "../MenuInner/MenuInner";
import MenuSlider from "../MenuSlider";
import Imgvip from '../../../../assets/Img-vip.png';
import MenuMalbum from "../MenuMalbum";
import ListMsong from "./ListMsong";
import { dataSong } from "../../../../dataSong";
import "react-h5-audio-player/lib/styles.css"; 
import ListMovie from '../ListMovie'
import MobilePlaySong from "./MobilePlaySong/MobilePlaySong";
import FooterMobile from "./FooterMobie";
import Song from "../../../../SongContext/Song";
import { useContext, useEffect, useState} from "react";
import Msong from "./Msong/Msong";
import MobilePlayAlbum from "./MobilePlayAlbum/MobilePlayAlbum";
import { dataPlaylist } from "../../../../dataPlaylist";
import PlayList from "../../../../PlayListContext/PlayList";

const cx = classNames.bind(styles);
const INNER = [
    {
        id: 1,
        name: 'TRANG CHỦ'
    },
    {
        id: 2,
        name: '#ZINGCHART'
    },
    {
        id: 3,
        name: 'NHẠC CÁ NHÂN'
    }
 ]


function DefaultLayout() {

   const {song, dong ,onlist, mo, moadd, dong1,mo2, handlePlaySong, mo1 } = useContext(Song);
   const {handlePlayList, playlist } = useContext(PlayList);
   console.log(onlist)
   const [fix, setFix]= useState('none');
   
   useEffect(() =>{
      if(playlist.id === onlist){
        setFix(mo2)
      }  
      else if(song.album === onlist){
        setFix(mo2)
      }
      else
      {
        setFix('none')
      }
   },[playlist.id, onlist, mo2, song.album]) 
    return ( 
        <div  className={cx('wrappermobi')}>
                <div className={cx('containermobi')}>
                    <MobileHeader />
                    <div style={{display : `${mo}` }} className={`${styles.shownhac}`} >
                    <MobilePlaySong />
                    </div>
                    <div style={{display : `${moadd}` }} className={`${styles.shownhac}`} >
                    <MobilePlayAlbum active={onlist} />
                    </div>
                    <div style={{display : `${dong}` }} className={`${styles.nghenhac}`}>    
                    <MenuInner items={INNER}></MenuInner>
                    <div className={cx('contentmobi')}>
                    <MenuSlider></MenuSlider>
                  <div className={cx('banner-vip')}>
                       <img className={cx('imgvip')} src={Imgvip} alt=''></img>
                    </div>
                     
                    <div className={cx('nhapcode')}>Hoặc nhập code VIP</div>
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', fontWeight:'700'}}>CUỐI TUẦN THƯ THẢ</div>
                                <MenuMalbum items={dataPlaylist}></MenuMalbum>
                            </div>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', marginBottom: '5px', fontWeight:'700'}}>BÀI HÁT MỚI</div>
                                <div className={cx('boc')}>
                                <ListMsong con={<Msong  />} items={dataSong}></ListMsong>
                                </div>
                            </div>
                        </div>
                       
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px'}}>ALBUM HOT</div>
                                {/* <MenuMalbum2></MenuMalbum2> */}
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', fontWeight:'700'}}>MV HOT</div>
                                <ListMovie></ListMovie>
                            </div>
                        </div>
                       
                    </div>
                    <div  onClick={() => handlePlayList(onlist)} style={{display : `${fix}` }} className={cx('thanhplayalbum')}>
                      <div className={cx('content')}>
                        <div className={cx('playti')}><div className={cx('span')}>Bài Hát Đang Phát:</div></div>
                      <div className={cx('bocimg')}>
                      <img className={cx('imgplay')} src={song.img} alt=''></img> 
                      </div>
                      <div className={cx('playname')}><div className={cx('span')}>{song.name}</div></div>
                      </div>
                    </div>
                    <div  onClick={() => handlePlaySong(song.id)} style={{display : `${mo1}` }} className={cx('thanhplay')}>
                      <div className={cx('content')}>
                        <div className={cx('playti')}><div className={cx('span')}>Bài Hát Đang Phát:</div></div>
                      <div className={cx('bocimg')}>
                      <img className={cx('imgplay')} src={song.img} alt=''></img> 
                      </div>
                      <div className={cx('playname')}><div className={cx('span')}>{song.name}</div></div>
                      </div>
                    </div>
                    <div  style={{display : `${dong1}` }} className={cx('widget')}>
                        <img className={cx('img')} src={icon} alt=''></img>
                        <span className={cx('title')}>Trải nghiệm Zing MP3 tốt nhất trên app</span>
                    </div>
                   <FooterMobile /> 
                </div>
                </div>
            </div>
     );
}

export default DefaultLayout;