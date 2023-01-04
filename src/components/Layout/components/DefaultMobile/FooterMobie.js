import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import icon from '../../../../assets/Icon-widget.png';
import LinkOpen from "../LinkOpen";
const cx = classNames.bind(styles);

function FooterMobile() {
    return ( 
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
     );
}

export default FooterMobile;