import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import classNames from "classnames/bind";
import styles from '../MenuSlider/MenuSlider.module.scss';
import img1 from '../../../../assets/Img-slider1.jpg';
import img2 from '../../../../assets/Img-slider2.jpg';
import img3 from '../../../../assets/Img-slider3.jpg';
import img4 from '../../../../assets/Img-slider4.jpg';
import img5 from '../../../../assets/Img-slider5.jpg';
import img11 from '../../../../assets/Img-slider11.jpg';
import img13 from '../../../../assets/Img-slider13.jpg';
import img15 from '../../../../assets/Img-slider15.jpg';


const cx = classNames.bind(styles);


function MenuSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: dots => (
            <div
              style={{ 
                bottom: '30px',
                width: '100%',
                height: '6px',
                zIndex: '1000',
              }}
            >
              <ul style={{width: '100%', height: '6px', margin: "0px", padding:'0'}}>{dots}</ul>
            </div>
          ),
         
        };

    return ( 
        <>

        <div className={cx('wrapper')}>
        <Slider {...settings}>
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
                <img className={cx('imgcon')} src={img13} alt=""></img>
            </div>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img4} alt=""></img>
                <img className={cx('imgcon')} src={img11} alt=""></img>
            </div>
            <div className={cx('slide')}>
                <img className={cx('img')} src={img5} alt=""></img>
                <img className={cx('imgcon')} src={img15} alt=""></img>
            </div>
       </Slider>
        </div>
       
        </>
     );
}

export default MenuSlider;