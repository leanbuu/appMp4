
import classNames from "classnames/bind";
import styles from '../Inner/Inner.module.scss';


const cx = classNames.bind(styles);


function  Inner( {data, bien}) {
    let active = bien;
    return ( 
        <button className={`${styles.select} ${data?.id === active ?styles.active:""}`}>
            <div className={cx('title')}>{data.name}</div>
        </button>
     );
}

export default  Inner;