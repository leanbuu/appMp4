import classNames from "classnames/bind";
import styles from '../ListMovie/ListMovie.module.scss';
import Movie from '../Movie';
import img1 from '../../../../assets/Img-movie1.jpg';
import img2 from '../../../../assets/Img-movie2.jpg';
import img3 from '../../../../assets/Img-movie3.jpg';
import img4 from '../../../../assets/Img-movie4.jpg';
import img5 from '../../../../assets/Img-movie5.jpg';

const cx = classNames.bind(styles);


function ListMovie() {
    return ( 
        <div className={cx('list')}>
            <Movie img={img1} title={'Túp Lều Vàng'} art={'Nguyễn Đình Vũ'}></Movie>
            <Movie img={img2} title={'Lựa Chọn Của Anh'} art={'Thương Võ'}></Movie>
            <Movie img={img3} title={'Những Lời Dối Gian'} art={'Vicky Nhung'}></Movie>
            <Movie img={img4} title={'Sai Cách Yêu'} art={'Lê Bảo Bình'}></Movie>
            <Movie img={img5} title={'Khi Cô Đơn Em Nhớ Ai'} art={'Vicky Nhung'}></Movie>
        </div>
     );
}

export default ListMovie;