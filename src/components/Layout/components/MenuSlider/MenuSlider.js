
import classNames from "classnames/bind";
import styles from '../MenuSlider/MenuSlider.module.scss';
import img1 from '../../../../assets/Img-slider1.jpg';
import img2 from '../../../../assets/Img-slider2.jpg';
import img3 from '../../../../assets/Img-slider3.jpg';
import img4 from '../../../../assets/Img-slider4.jpg';
import img11 from '../../../../assets/Img-slider11.jpg';


const cx = classNames.bind(styles);


function MenuSlider() {
    return ( 
        <div className={cx('wrpper')}>
        <div className={cx('menu-slider')}>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img1} alt=""></img>
                <img className={cx('imgcon')} src={img11} alt=""></img>
            </div>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img2} alt=""></img>
                <img className={cx('imgcon')} src={img11} alt=""></img>
            </div>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img3} alt=""></img>
                <img className={cx('imgcon')} src={img11} alt=""></img>
            </div>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img4} alt=""></img>
                <img className={cx('imgcon')} src={img11} alt=""></img>
            </div>
        </div>
        <div className={cx('swiper')}>
           <div className={cx('list-bullet')}>
            <div className={cx('bullet')}></div>
            <div className={cx('bullet')}></div>
            <div className={cx('bullet')}></div>
            <div className={cx('bullet')}></div>
            <div className={cx('bullet')}></div>
           </div>
        </div>
        </div>
        
     );
}

export default MenuSlider;