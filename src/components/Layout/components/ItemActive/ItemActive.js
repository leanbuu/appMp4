
import classNames from "classnames/bind";
import styles from '../ItemActive/ItemActive.module.scss';




const cx = classNames.bind(styles);

function ItemActive({ data, bien }) {
    let active = bien;
    return ( 
        <div className={`${styles.item} ${data?.id === active ?styles.active:""}`}>
            <img  className={cx('img')} src={data.img} alt=''></img>
            <div className={cx('title')}>{data.title}</div>
        </div>
            
     );
}

export default ItemActive;