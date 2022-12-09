import classNames from "classnames/bind";
import styles from '../MobileHeader/MobileHeader.module.scss'
import icon1 from '../../../../../assets/Icon-btnmobile.jpg'
import icon2 from '../../../../../assets/Icon-close.jpg'
import iconm1 from '../../../../../assets/Icon-mtrangchu.jpg'
import iconm2 from '../../../../../assets/Icon-mzing.jpg'
import iconm3 from '../../../../../assets/Icon-mmoi.jpg'
import iconm4 from '../../../../../assets/Icon-mtop.jpg'
import iconm5 from '../../../../../assets/Icon-mchude.jpg'
import iconm6 from '../../../../../assets/Icon-mmv.jpg'
import iconm7 from '../../../../../assets/Icon-malbum.jpg'
import iconm8 from '../../../../../assets/Icon-mnhaccanhan.jpg'
import { Link } from "react-router-dom";
import logo from '../../../../../assets/Icon-logomobi.jpg'
import imgsearch from '../../../../../assets/Icon-searchmobile.jpg'
import avarta from '../../../../../assets/anhThii.jpg'
import MenuInner from "../../MenuInner/MenuInner";
import MenuActive from "../../MenuActive";
import MenuSlider from "../../MenuSlider";

import { useState } from "react";




const cx = classNames.bind(styles)
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

const ACTIVE = [
   {
       id: 1,
       img: iconm1,
       title: 'TRANG CHỦ',    
   },
   {
       id: 2,
       img: iconm2,
       title: '#ZINGCHART',    
   },
   {
       id: 3,
       img: iconm3,
       title: 'MỚI PHÁT HÀNH',    
   },
   {
       id: 4,
       img: iconm4,
       title: 'TOP 100',    
   },
   {
       id: 5,
       img: iconm5,
       title: 'CHỦ ĐỀ',    
   }, 
   {
       id: 6,
       img: iconm6,
       title: 'MV',    
   },
   {
       id: 7,
       img: iconm7,
       title: 'ALBUM',    
   },
   {
       id: 8,
       img: iconm8,
       title: 'NHẠC CÁ NHÂN',    
   }
]



function MobileHeader() {
   const [active, setActive] = useState(false)
   function handleShow() {
   setActive(true);
   }
   function handleClose() {
      
   setActive(false);
   }

   console.log(active)
    return ( 
      <div>
        <div className={`${styles.navi} ${active ?styles.active:""}`}>
         </div>
         <div className={`${styles.showuser} ${active ?styles.active:""}`}>
         <div className={cx('navi-con')}>
         <div className={cx('usernavi')}>
            <img style={{width: '60px', height: '60px', borderRadius: '50%'}} src={avarta} alt=''></img>
            <div className={cx('card-info')}>
               <div className={cx('title')}>Nguyễn Thị Nhựt Thi</div>
               <div className={cx('user-action')}>
                  <div className={cx('vip')}>Nâng cấp VIP</div>
                  <div className={cx('code')}>Nhận code VIP</div>
               </div>
            </div>
            </div>
            <button className={cx('btn-close')}  onClick={handleClose} >
               <img src={icon2} alt=''></img>
            </button>
            <div className={cx('menu-content')}>
                <MenuActive items={ACTIVE}></MenuActive> 
            </div>
         </div>
         </div>
        <div className={cx('header')}>
           <div className={cx('btnmobile')}>
             <button onClick={handleShow} className={cx('btnheader')}>
                <img className={cx('icon')} src={icon1} alt=''></img>
             </button>
           </div>
           <div className={cx('logo')}>
           <Link >
                <img className={cx('imglogo')} src={logo} alt=""/>
        </Link>
           </div>
           <div className={cx('user')}>
            <img src={imgsearch} alt='' className={cx('imgsearch')}></img>
               <button className={cx('btnavarta')}> 
                  <img className={cx('imgavarta')} src={avarta} alt=''></img>
               </button>  
           </div>
        </div>
        <MenuInner items={INNER}></MenuInner>
        <MenuSlider></MenuSlider>
        </div>
     );
}

export default MobileHeader;