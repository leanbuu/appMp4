
import classNames from "classnames/bind";
import styles from '../Msong/Msong.module.scss';

const cx = classNames.bind(styles);

function Msong({img, title, artist}) {
    return ( 
        <div className={cx('item')}>
        <img src={img} alt="" className={cx('img')}></img>
        <div className={cx('info')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('artist')}>{artist}</div>
        </div>
    </div>
     );
}

export default Msong;