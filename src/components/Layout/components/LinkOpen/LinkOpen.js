
import classNames from "classnames/bind";
import styles from '../LinkOpen/LinkOpen.module.scss'


const cx = classNames.bind(styles);

function LinkOpen({name}) {
    return ( 
        <div className={cx('link')}>{name}</div>
     );
}

export default LinkOpen;