
import classNames from "classnames/bind";
import styles from '../Header/Header.module.scss';
import Search from "../../components/Search";

const cx = classNames.bind(styles);


function Header() {
    return <div className={cx('header')}>
       <Search />
    </div>;
}

export default Header;