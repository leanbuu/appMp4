
import classNames from "classnames/bind";
import styles from '../CarouselItem/CarouselItem.module.scss';

const cx = classNames.bind(styles);


function CarouselItem( {img, title, phude } ) {
    return ( 
        <div className={cx('card')}>
                <img className={cx('img')} src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/7/9/b/d79bdcaa9dae6442ba4052112b2de56e.jpg" alt=""></img>
                <div className={cx('content')}>
                    <div className={cx('title')}>Đỉnh Cao Trending</div>
                    <div className={cx('phude')}>Chiếm trọn Top Trending Việt Nam khi vừa ra mắt</div>
                </div>   
        </div>
     );
}

export default CarouselItem;