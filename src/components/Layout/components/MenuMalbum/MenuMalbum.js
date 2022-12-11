
import classNames from "classnames/bind";
import styles from '../MenuMalbum/MenuMalbum.module.scss';
import Malbum from "../Malbum/Malbum";

import img1 from '../../../../assets/Img-album1.jpg'
import img2 from '../../../../assets/Img-album2.jpg'
import img3 from '../../../../assets/Img-album3.jpg'
import img4 from '../../../../assets/Img-album4.jpg'

const cx = classNames.bind(styles);

function MenuMalbum() {
    return ( 
        <div className={cx('menu-album')}>
            <Malbum img={img1} title={'Nhạc Cho Chủ Nhật'}></Malbum>
            <Malbum img={img2} title={'Pop Ballad Việt Nổi Bật'}></Malbum>
            <Malbum img={img3} title={'Xmas List'}></Malbum>
            <Malbum img={img4} title={'Nhẹ Nhàng Cùng V-Pop'}></Malbum>
        </div>
     );
}

export default MenuMalbum;