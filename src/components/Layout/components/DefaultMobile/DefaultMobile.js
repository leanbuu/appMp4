
import classNames from "classnames/bind";
import styles from '../DefaultMobile/DefaultMobile.module.scss'
import MobileHeader from "./MobileHeader";

const cx = classNames.bind(styles);

function DefaultLayout() {
    return ( 
        <div className={cx('wrappermobi')}>
                <div className={cx('containermobi')}>
                    <MobileHeader />
                    <div className={cx('contentmobi')}>
                    </div>
                </div>
            </div>
     );
}

export default DefaultLayout;