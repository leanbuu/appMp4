
import classNames from "classnames/bind";
import styles from '../MenuMalbum/MenuMalbum.module.scss';
import Malbum from "../Malbum/Malbum";

import img1 from '../../../../assets/Img-album21.jpg'
import img2 from '../../../../assets/Img-album22.jpg'
import img3 from '../../../../assets/Img-album23.jpg'
import img4 from '../../../../assets/Img-album24.jpg'
import img5 from '../../../../assets/Img-album25.jpg'
import img6 from '../../../../assets/Img-album26.jpg'


const cx = classNames.bind(styles);

function MenuMalbum2() {
    return ( 
        <div className={cx('menu-album')}>
            <Malbum img={img1} title={'Noel Biết Yêu (Single)'} artist={'Tiên Tiên'}></Malbum>
            <Malbum img={img2} title={'Xa Em Kỷ Niệm (Single)'} artist={'Lưu Bích'}></Malbum>
            <Malbum img={img3} title={'Người Vui Người Đau (Single)'} artist={'Hoàng Minh'}></Malbum>
            <Malbum img={img4} title={'Thôi Nín Đi Em (Single)'} artist={'Thành Đạt'}></Malbum>
            <Malbum img={img5} title={'1001 Lý Do (Single)'} artist={'Dương Hùng Sơn'}></Malbum>
            <Malbum img={img6} title={'Nắng Đẹp Miền Nam (Single)'} artist={'Hồng Phượng'}></Malbum>
        </div>
     );
}

export default MenuMalbum2;