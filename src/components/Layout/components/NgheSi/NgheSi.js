
import classNames from "classnames/bind";
import styles from '../NgheSi/NgheSi.module.scss';


const cx = classNames.bind(styles);


function NgheSi( {img, title } ) {
    return ( 
        <div className={cx('card')}>
               <div className={cx('anh')}>
                <img  className={cx('img')} src={img} alt=""></img>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>{title}</div>
                </div>   
        </div>
     );
}

export default NgheSi;