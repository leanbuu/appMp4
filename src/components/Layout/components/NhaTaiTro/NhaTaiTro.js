import classNames from "classnames/bind";
import styles from '../NhaTaiTro/NhaTaiTro.module.scss';


const cx = classNames.bind(styles);



function NhaTaiTro( {anh}) {
    return ( 
        <div className={cx("pr")}>
        <div className={cx('content')}>
           <figure className={cx('figure')}>
              <img src={anh} className={cx('img')} alt=''></img>
           </figure>
        </div>
    </div>
     );
}

export default NhaTaiTro;