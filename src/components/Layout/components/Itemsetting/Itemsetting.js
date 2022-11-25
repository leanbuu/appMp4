

import classNames from "classnames/bind";
import styles from '../Itemsetting/Itemsetting.module.scss';



const cx = classNames.bind(styles);

function ItemSetting({ props }) {
    return ( 
        <button className={cx('setting')}>
        <img className={cx('icon-setting')} src={props} alt=""></img>
        </button>
     );
}

export default ItemSetting;