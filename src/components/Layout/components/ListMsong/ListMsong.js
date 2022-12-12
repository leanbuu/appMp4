
import classNames from "classnames/bind";
import styles from '../ListMsong/ListMsong.module.scss';
import Msong from "../Msong";

import img1 from '../../../../assets/Img-song1.jpg'
import img2 from '../../../../assets/Img-song2.jpg'
import img3 from '../../../../assets/Img-song3.jpg'
import img4 from '../../../../assets/Img-song4.jpg'


const cx = classNames.bind(styles);


function ListMsong() {
    return ( 
        <div className={cx('list')}>
            <Msong img={img1} title={'Kiêu Ngạo'} artist={'Huy Vạc'}></Msong>
            <Msong img={img2} title={'Như Áng Mây Trôi'} artist={'T-Passion'}></Msong>
            <Msong img={img3} title={'Tình Yêu Chân Thành'} artist={'Trương Thảo Nhi'}></Msong>
            <Msong img={img4} title={'Mai Em Về Bên Ấy'} artist={'Ngọc Hân'}></Msong><Msong img={img1} title={'Kiêu Ngạo'} artist={'Huy Vạc'}></Msong>
            <Msong img={img2} title={'Như Áng Mây Trôi'} artist={'T-Passion'}></Msong>
            <Msong img={img3} title={'Tình Yêu Chân Thành'} artist={'Trương Thảo Nhi'}></Msong>
            <Msong img={img4} title={'Mai Em Về Bên Ấy'} artist={'Ngọc Hân'}></Msong>
            <Msong img={img1} title={'Kiêu Ngạo'} artist={'Huy Vạc'}></Msong>
            <Msong img={img2} title={'Như Áng Mây Trôi'} artist={'T-Passion'}></Msong>
        </div>
     );
}

export default ListMsong;