
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NhacMoi from "../NhacMoi";


import classNames from "classnames/bind";
import styles from '../ListSliderNhacMoi/ListSliderNhacMoi.module.scss';
import img1 from '../../../../assets/Img-nhacmoi1.webp';
import img2 from '../../../../assets/Img-nhacmoi2.webp';
import img3 from '../../../../assets/Img-nhacmoi3.webp';
import img4 from '../../../../assets/Img-nhacmoi4.webp';
import img5 from '../../../../assets/Img-nhacmoi5.webp';
import img6 from '../../../../assets/Img-nhacmoi6.webp';
import img7 from '../../../../assets/Img-nhacmoi7.webp';





const cx = classNames.bind(styles);


function ListSliderNhacMoi() {
  const settings = {
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,

    autoplay: true,
    autoplaySpeed: 4000,
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
      <NhacMoi img={img1} name={'Thu Thay Lá, Em Thay Lòng'} tacgia={'Quang Hảo'} order={'#1'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img2} name={'Quá Bất Ngờ'} tacgia={'Dương Hoàng'} order={'#2'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img3} name={'Có Ai Đợi Anh Đâu'} tacgia={'Cao Thái Sơn'} order={'#3'} date={'21.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img4} name={'Cưới Thôi 2'} tacgia={'Masew'} order={'#4'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img5} name={'Để tôi ôm em bằng giai điệu này'} tacgia={'Kai Đình'} order={'#5'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img6} name={'Em Vẫn Tin Vào Tình Yêu Đấy'} tacgia={'Quang Hảo'} order={'#6'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img7} name={'Thu Thay Lá, Em Thay Lòng'} tacgia={'Quang Hảo'} order={'#7'} date={'23.12.2022'} />
      </div>
      <div className={cx('item')}>
      <NhacMoi img={img7} name={'Thu Thay Lá, Em Thay Lòng'} tacgia={'Quang Hảo'} order={'#8'} date={'23.12.2022'} />
      </div>
      </Slider>
    </div>
  );
}


export default ListSliderNhacMoi;