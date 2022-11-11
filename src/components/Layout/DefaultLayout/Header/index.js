
import classNames from "classnames/bind";
import styles from '../Header/Header.module.scss';

const cx = classNames.bind(styles);


function Header() {
    return <div className={cx('header')}>

    </div>;
}

export default Header;