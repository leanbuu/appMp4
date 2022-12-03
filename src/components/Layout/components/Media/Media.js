import classNames from "classnames/bind";
import styles from '../Media/Media.module.scss'
import imgmedia from '../../../../assets/anhThii.jpg'

const cx = classNames.bind(styles);

function Media({anh, ten, casi, thoigian}) {
    return (  
        <div className={cx('media')}>
            <div className={cx('img')}><img className={cx('img-media')} src={imgmedia} alt="" ></img></div>
            <div className={cx('card-info')}>
                <div className={cx('tieude')}>Bài Hát HAHA</div>
                <div className={cx('casi')}>Nhựt Thi</div>
                <div className={cx('thoigian')}>16 phút</div>
            </div>
        </div>
    );
}

export default Media;
