import classNames from "classnames/bind";
import styles from '../Footer/Footer.module.scss';
import img1 from '../../../../assets/Img-pr1.png';
import img2 from '../../../../assets/Img-pr2.png';
import img3 from '../../../../assets/Img-pr3.png';
import img4 from '../../../../assets/Img-pr4.png';
import img5 from '../../../../assets/Img-pr5.png';
import img6 from '../../../../assets/Img-pr6.png';
import img7 from '../../../../assets/Img-pr7.png';
import img8 from '../../../../assets/Img-pr8.png';
import img9 from '../../../../assets/Img-pr9.png';
import img10 from '../../../../assets/Img-pr10.png';
import NhaTaiTro from "../NhaTaiTro";

const cx = classNames.bind(styles);


function Footer() {
    return ( 
        <div className={cx('footer')}>
            <div className={cx('title')}>ĐỐI TÁC ÂM NHẠC</div>
            <div className={cx('listpr')}>
              <NhaTaiTro anh={img1}/>
              <NhaTaiTro anh={img2}/>
              <NhaTaiTro anh={img3}/>
              <NhaTaiTro anh={img4}/>
              <NhaTaiTro anh={img5}/>
              <NhaTaiTro anh={img6}/>
              <NhaTaiTro anh={img7}/>
              <NhaTaiTro anh={img8}/>
              <NhaTaiTro anh={img9}/>
              <NhaTaiTro anh={img10}/>
            </div>
        </div>
     );
}

export default Footer;