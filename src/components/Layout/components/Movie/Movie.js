import classNames from "classnames/bind";
import styles from '../MenuMalbum/MenuMalbum.module.scss';


const cx = classNames.bind(styles);


function Movie({img, title, art}) {
    return ( 
        <div className={cx('movie')}>
            <img src={img} className={cx('img')} alt=""></img>
            <div className={cx('title')}>{title}</div>
            <div className={cx('artist')}>{art}</div>
        </div>
     );
}

export default Movie;