
import classNames from "classnames/bind";
import styles from '../Avarta/Avarta.module.scss';
import avarta from '../../../../assets/anhThii.jpg'

const cx = classNames.bind(styles);

function Avarta() {
    return ( 
        <button className={cx('avarta')}>
            <img className={cx('img-avarta')} src={avarta} alt="" ></img>
        </button>
     );
}

export default Avarta;