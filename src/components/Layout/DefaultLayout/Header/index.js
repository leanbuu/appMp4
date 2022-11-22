
import classNames from "classnames/bind";
import styles from '../Header/Header.module.scss';
import Search from "../../components/Search";
import ItemSetting from "../../components/Itemsetting";
import Avarta from "../../components/Avarta";

import icon1 from '../../../../assets/Icon-chude.png'
import icon2 from '../../../../assets/Icon-nangcap.png'
import icon3 from '../../../../assets/Icon-tailen.png'
import icon4 from '../../../../assets/Icon-caidat.png'



const cx = classNames.bind(styles);


function Header() {
    return <div className={cx('header')}>
       <Search />
       <div className={cx('menu-item')}>
       <ItemSetting props={icon1} />
       <ItemSetting props={icon2} />
       <ItemSetting props={icon3} />
       <ItemSetting props={icon4} />
       <Avarta />
       </div>
    </div>;
}

export default Header;