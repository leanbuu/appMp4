
import classNames from "classnames/bind";
import styles from '../Backbtn/Backbtn.module.scss';

const cx = classNames.bind(styles);

function Backbtn({props}) {
    return ( 
        <button className={cx('back')}>
        <img className={cx('back-icon')} src={props} alt=""></img>
        </button>
     );
}

export default Backbtn;