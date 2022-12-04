import classNames from "classnames/bind";
import styles from '../MobileHeader/MobileHeader.module.scss'
import icon1 from '../../../../../assets/Icon-btnmobile.jpg'
import { Link } from "react-router-dom";
import logo from '../../../../../assets/Icon-logomobi.jpg'
import imgsearch from '../../../../../assets/Icon-searchmobile.jpg'
import avarta from '../../../../../assets/anhThii.jpg'
import MenuInner from "../../MenuInner/MenuInner";


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
    return ( 
      <div>
        <div className={cx('header')}>
           <div className={cx('btnmobile')}>
             <button className={cx('btnheader')}>
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