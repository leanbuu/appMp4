
import classNames from "classnames/bind";
import styles from '../BgNen/BgNen.module.scss';

const cx = classNames.bind(styles);

function BgNen() {
    return ( 
        <>
        <div className={cx('bg')}></div>
        <div className={cx('bgal')}></div>
        </>
     );
}

export default BgNen;