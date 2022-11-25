
import classNames from "classnames/bind";
import styles from '../Header/Header.module.scss';
import Search from "../../components/Search/Search";
import ItemSetting from "../../components/Itemsetting/Itemsetting";
import Avarta from "../../components/Avarta";
import Backbtn from "../../components/Backbtn/Backbtn";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import icon1 from '../../../../assets/Icon-chude.png'
import icon2 from '../../../../assets/Icon-nangcap.png'
import icon3 from '../../../../assets/Icon-tailen.png'
import icon4 from '../../../../assets/Icon-caidat.png'
import backri from "../../../../assets/Icon-backright.png"
import backle from "../../../../assets/Icon-backleft.png"



const cx = classNames.bind(styles);


function Header() {
    return <div className={cx('header')}>
       <Backbtn props={backri}/>
       <Backbtn props={backle}/>
       <Search />

       <div className={cx('menu-item')}>
       <Tippy delay={[0, 10]} content={'Chủ đề'} placement='bottom'>
              <div className={cx('btn-item')}>
              <ItemSetting props={icon1} />
              </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Nâng cấp VIP'} placement='bottom'>
              <div className={cx('btn-item')}>
              <ItemSetting props={icon2} />
              </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Tải lên'} placement='bottom'>
              <div className={cx('btn-item')}>
              <ItemSetting props={icon3} />
              </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Cài đặt'} placement='bottom'>
              <div className={cx('btn-item')}>
              <ItemSetting props={icon4} />
              </div>
        </Tippy>
       <Avarta />
       </div>
    </div>;
}

export default Header;