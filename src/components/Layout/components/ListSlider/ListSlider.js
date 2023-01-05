
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import classNames from "classnames/bind";
import styles from '../ListSlider/ListSlider.module.scss';
import img1 from '../../../../assets/Img-sliderpc1.jpg';
import img2 from '../../../../assets/Img-sliderpc2.jpg';
import img3 from '../../../../assets/Img-sliderpc3.jpg';
import img4 from '../../../../assets/Img-sliderpc4.jpg';
import img5 from '../../../../assets/Img-sliderpc5.jpg';
import img6 from '../../../../assets/Img-sliderpc6.jpg';


const cx = classNames.bind(styles);


function ListSlider() {
  const settings = {
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    swipe: false,
    touchMove: false,
    appendDots: dots => (
      <div
        style={{ 
         
        }}
      >
        <ul style={{display: 'none'}}>{dots}</ul>
      </div>
    ),
   
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={cx('item')}>
          <img src={img1} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          <img src={img2} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          <img src={img3} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          <img src={img4} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          <img src={img5} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          <img src={img6} className={cx('img')} alt=''></img>
        </div>
      </Slider>
    </div>
  );
}


export default ListSlider;