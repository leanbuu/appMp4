
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import MobileHeader from "./MobileHeader";
import icon from '../../../../assets/Icon-widget.png';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return ( 
        <div className={cx('wrappermobi')}>
                <div className={cx('containermobi')}>
                    <MobileHeader />
                    <div className={cx('contentmobi')}>
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