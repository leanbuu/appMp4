import classNames from "classnames/bind";
import styles from '../Media/Media.module.scss'

const cx = classNames.bind(styles);

function Media({anh, ten, casi, thoigian}) {
    return (  
        <div className={cx('media')}>
            <div className={cx('img')}><img className={cx('img-media')} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275622483_1203181200216535_1427750920873467953_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RR9eGGBzq0sAX_gkcbw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyJABf9w9nW6aq6YqjfuxrT9gGXRfSdiPOOPbbi4Z0YA&oe=6385E176" alt="" ></img></div>
            <div className={cx('card-info')}>
                <div className={cx('tieude')}>Bài Hát HAHA</div>
                <div className={cx('casi')}>Nhựt Thi</div>
                <div className={cx('thoigian')}>16 phút</div>
            </div>
        </div>
    );
}

export default Media;
