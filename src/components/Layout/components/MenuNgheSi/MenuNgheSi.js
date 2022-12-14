import classNames from "classnames/bind";
import styles from '../MenuNgheSi/MenuNgheSi.module.scss';
import NgheSi from "../NgheSi";
import img1 from '../../../../assets/Img-nghesi1.webp'
import img2 from '../../../../assets/Img-nghesi2.webp'
import img3 from '../../../../assets/Img-nghesi3.webp'
import img4 from '../../../../assets/Img-nghesi4.webp'
import img5 from '../../../../assets/Img-nghesi5.webp'

const cx = classNames.bind(styles);


function MenuNgheSi() {
    return ( 
        <div className={cx('carousel')}>
           <NgheSi img={img1} title={'Ú òa cùng những ca khúc nổi bật nhất của MONO'}/>
           <NgheSi img={img2} title={'Ở đây có Hà Nhi và bộ sưu tập Hit về người yêu cũ'}/>
           <NgheSi img={img3} title={'Hoàng Thùy Linh và những bản Hit quốc dân như...'}/>
           <NgheSi img={img4} title={'Không được "Ngủ Quên" với Hit cực cháy của...'}/>
           <NgheSi img={img5} title={'Đóng băng với "Hơn em chỗ nào" và những bản...'}/>
        </div>
     );
}

export default MenuNgheSi;