
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import MobileHeader from "./MobileHeader";
import icon from '../../../../assets/Icon-widget.png';
import MenuInner from "../MenuInner/MenuInner";
import MenuSlider from "../MenuSlider";
import Imgvip from '../../../../assets/Img-vip.png';
import MenuMalbum from "../MenuMalbum";
import ListMsong from "../ListMsong";
import LinkOpen from "../LinkOpen";
import MenuMalbum2 from "../MenuMalbum2";
import ListMovie from '../ListMovie'

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
                                <div style={{fontSize: '18px', fontWeight:'700'}}>CUỐI TUẦN THƯ THẢ</div>
                                <MenuMalbum></MenuMalbum>
                            </div>
                            <div className={cx('contair')}>
                                <div style={{fontSize: '18px', marginBottom: '5px', fontWeight:'700'}}>BÀI HÁT MỚI</div>
                                <ListMsong></ListMsong>
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
                    <div className={cx('footer')}>
                    <div className={cx('contair-footer')}>
                        <div className={cx('info-footer')}>
                            <div className={cx('row')}>
                                <div className={cx('title1')}>
                                    <img style={{width: '40px', height: '40px'}} src={icon} alt=''></img>
                                    <div className={cx('info-tacgia')}>Một sản phẩm của An</div>
                                </div>
                                <div className={cx('nav-footer')}>
                                <LinkOpen name={'Giới Thiệu'}></LinkOpen>
                                 <div className={cx('z-link')}>•</div>
                                 <LinkOpen name={'Liên Hệ'}></LinkOpen>
                                 <div className={cx('z-link')}>•</div>
                                 <LinkOpen name={'Quảng Cáo'}></LinkOpen>
                                 <br></br>
                                 <LinkOpen name={'Góp Ý'}></LinkOpen>
                                 <div className={cx('z-link')}>•</div>
                                 <LinkOpen name={'Thỏa Thuận Sử Dụng'}></LinkOpen>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
     );
}

export default DefaultLayout;