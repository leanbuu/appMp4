
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import MobileHeader from "./MobileHeader";
import icon from '../../../../assets/Icon-widget.png';
import MenuInner from "../MenuInner/MenuInner";
import MenuSlider from "../MenuSlider";
import Imgvip from '../../../../assets/Img-vip.png';
import MenuMalbum from "../MenuMalbum";


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

    return ( 
        <div className={cx('wrappermobi')}>
                <div className={cx('containermobi')}>
                    <MobileHeader />
                    <MenuInner items={INNER}></MenuInner>
                    <div className={cx('contentmobi')}>
                    <MenuSlider></MenuSlider>
                    <div className={cx('banner-vip')}>
                       <img className={cx('imgvip')} src={Imgvip} alt=''></img>
                    </div>
                    <div className={cx('nhapcode')}>Hoặc nhập code VIP</div>
                        <div style={{marginTop: '20px'}}>
                            <div className={cx('contair')}>
                                <div>CUỐI TUẦN THƯ THẢ</div>
                                <MenuMalbum></MenuMalbum>
                            </div>
                        </div>
                    </div>
                    <div className={cx('widget')}>
                        <img className={cx('img')} src={icon} alt=''></img>
                        <span className={cx('title')}>Trải nghiệm Zing MP3 tốt nhất trên app</span>
                    </div>
                </div>
            </div>
     );
}

export default DefaultLayout;