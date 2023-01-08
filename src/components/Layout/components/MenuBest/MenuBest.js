import classNames from "classnames/bind";
import styles from '../MenuBest/MenuBest.module.scss';
import Best from "../Best";
import img1 from '../../../../assets/Img-best1.webp'
import img2 from '../../../../assets/Img-best2.webp'
import img3 from '../../../../assets/Img-best3.webp'
import img4 from '../../../../assets/Img-best4.webp'
import img5 from '../../../../assets/Img-best5.webp'

const cx = classNames.bind(styles);


function MenuBest() {
    return ( 
        <div className={cx('carousel')}>
           <Best img={img1} titlee={'40 Ca Khúc Thịnh Hành...'} sub={'Hoàng Thùy Linh, ERIK'} />
           <Best img={img2} titlee={'40 Nghệ Sĩ Thịnh Hành...'}  sub={'AMEE, Châu Khải Phong'}/>
           <Best img={img3} titlee={'Hip-hop Việt Nổi Bật 2022'}  sub={'HIEUTHUHAI, Phúc Du'}/>
           <Best img={img4} titlee={'Nghệ Sĩ Mới Nổi Bật 2022'}  sub={'MONO'}/>
           <Best img={img5} titlee={'V-Pop Nổi Bật 2022'}  sub={'Miu Lê, Karik'}/>
        </div>
     );
}

export default MenuBest;