
import classNames from "classnames/bind";
import styles from '../NgheSi/NgheSi.module.scss';


const cx = classNames.bind(styles);


function NgheSi( {img, titlee, sub } ) {
    return ( 
        <div className={cx('card')}>
               <div className={cx('anh')}>
                <img  className={cx('img')} src={img} alt=""></img>
                </div>
                <div className={cx('content')}>
                    <div title={titlee} className={cx('title')}>{titlee}</div>
                    <div className={cx('sub')}>{sub}</div>
                </div>   
        </div>
     );
}

export default NgheSi;