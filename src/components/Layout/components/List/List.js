import classNames from "classnames/bind";
import styles from '../List/List.module.scss';
import Carousel from "../Carousel";


const cx = classNames.bind(styles);


function List( { props }) {
    return ( 
        <div className={cx('list')}>
            <div className={cx('title')}>{props}</div>
            <Carousel />
        </div>
     );
}

export default List;