import classNames from "classnames/bind";
import styles from '../ListNgheSi/ListNgheSi.module.scss';



const cx = classNames.bind(styles);

function ListNgheSi( { props }) {
    return ( 
        <div className={cx('list')}>
            <div className={cx('title')}>{props}</div>
        </div>
     );
}

export default ListNgheSi;