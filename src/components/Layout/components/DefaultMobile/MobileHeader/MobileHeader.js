import classNames from "classnames/bind";
import styles from '../MobileHeader/MobileHeader.module.scss'
import icon1 from '../../../../../assets/Icon-btnmobile.jpg'
import icon2 from '../../../../../assets/Icon-close.jpg'
import { Link } from "react-router-dom";
import logo from '../../../../../assets/Icon-logomobi.jpg'
import imgsearch from '../../../../../assets/Icon-searchmobile.jpg'
import avarta from '../../../../../assets/anhThii.jpg'
import MenuInner from "../../MenuInner/MenuInner";
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



function MobileHeader() {
   const [dis, setDis] = useState('none')
   const [con, setCon] = useState('100%')
   function handleShow() {
      setDis('block');
      setCon('0%')
   }
   function handleClose() {
      setDis('none');
      setCon('100%')
   }
    return ( 
      <div>
        <div className={cx('navi')} style={{display: dis }}>
         <div className={cx('navi-con')}  style={{left: con}}>
         <div className={cx('usernavi')}>
            <img style={{width: '60px', height: '60px', borderRadius: '50%'}} src={avarta} alt=''></img>
            <button className={cx('btn-close')}  onClick={handleClose} >
               <img src={icon2} alt=''></img>
            </button>
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
        </div>
     );
}

export default MobileHeader;