
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
import AudioPlayer from "react-h5-audio-player";
import { BsFillPlayFill, BsPause, BsPauseFill } from "react-icons/bs";
import "react-h5-audio-player/lib/styles.css"; 
import MenuMalbum2 from "../MenuMalbum2";
import ListMovie from '../ListMovie'
import MobilePlaySong from "./MobilePlaySong";
import FooterMobile from "./FooterMobie";
import Song from "../../../../SongContext/Song";
import { useContext, useState} from "react";
import Msong from "./Msong/Msong";

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
   const [active, setActive] = useState(false)
   function handleShow() {
   setActive(true);
   }
   function handleClose() {
   setActive(false);
   }

   const {song, dong , mo } = useContext(Song);
    return ( 
        <div  className={cx('wrappermobi')}>
                <div className={cx('containermobi')}>
                    <MobileHeader />
                    <div style={{display : `${mo}` }} className={`${styles.shownhac} ${active ?styles.active:""}`} >
                    <MobilePlaySong />
                    </div>
                    <div style={{display : `${dong}` }} className={`${styles.nghenhac} ${active ?styles.active:""}`}>    
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
                                <MenuMalbum></MenuMalbum>
                            </div>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', marginBottom: '5px', fontWeight:'700'}}>BÀI HÁT MỚI</div>
                                <ListMsong con={<Msong  />} items={dataSong}></ListMsong>
                            </div>
                        </div>
                       
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px'}}>ALBUM HOT</div>
                                <MenuMalbum2></MenuMalbum2>
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', fontWeight:'700'}}>MV HOT</div>
                                <ListMovie></ListMovie>
                            </div>
                        </div>
                       
                    </div>
                    <div className={cx('widget')}>
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