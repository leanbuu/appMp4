import classNames from "classnames/bind";
import styles from '../MenuMedia/MenuMedia.module.scss';
import Media from "../Media";

const cx = classNames.bind(styles);

function MenuMedia() {
    return ( 
        <div className={cx('menu-media')}>
            <div className={cx('boc')}>
                <Media />
            </div>
            <div className={cx('boc')}>
                <Media />
            </div>
            <div className={cx('boc')}>
                <Media />
            </div>
            <div className={cx('boc')}>
                <Media />
            </div>
        </div>
     );
}

export default MenuMedia;