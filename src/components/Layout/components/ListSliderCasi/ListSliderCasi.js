
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import classNames from "classnames/bind";
import styles from '../ListSliderCasi/ListSliderCasi.module.scss';
import img1 from '../../../../assets/Img-casi1.png';
import img2 from '../../../../assets/Img-casi2.png';
import img3 from '../../../../assets/Img-casi3.png';
import img4 from '../../../../assets/Img-casi4.png';
import img5 from '../../../../assets/Img-casi5.png';
import img6 from '../../../../assets/Img-casi6.png';
import img7 from '../../../../assets/Img-casi7.png';
import img8 from '../../../../assets/Img-casi8.png';
import img9 from '../../../../assets/Img-casi9.png';
import img10 from '../../../../assets/Img-casi10.png';


const cx = classNames.bind(styles);


function ListSliderCasi() {
  const settings = {
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 5,

    autoplay: true,
    autoplaySpeed: 3500,
     // eslint-disable-next-line
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
        <div className={cx('item')}>
          
          <img src={img7} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          
          <img src={img8} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          
          <img src={img9} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          
          <img src={img10} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          
          <img src={img1} className={cx('img')} alt=''></img>
        </div>
        <div className={cx('item')}>
          
          <img src={img1} className={cx('img')} alt=''></img>
        </div>
      </Slider>
    </div>
  );
}


export default ListSliderCasi;