
import classNames from "classnames/bind";
import styles from '../Zing/Zing.module.scss';

const cx = classNames.bind(styles);

function Zing() {
    return ( 
        <div>
            <div className={cx('bg')}></div>
        </div>
     );
}

export default Zing;