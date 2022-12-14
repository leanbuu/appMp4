import classNames from "classnames/bind";
import styles from '../ListNgheSi/ListNgheSi.module.scss';
import MenuNgheSi from "../MenuNgheSi";

const cx = classNames.bind(styles);


function ListNgheSi( { props }) {
    return ( 
        <div className={cx('list')}>
            <div className={cx('title')}>{props}</div>
            <MenuNgheSi />
        </div>
     );
}

export default ListNgheSi;