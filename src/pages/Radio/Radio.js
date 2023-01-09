import BgNen from "../../components/Layout/components/BgNen/BgNen";

import classNames from "classnames/bind";
import styles from "../Radio/Radio.module.scss";
import Header from "../../components/Layout/DefaultLayout/Header";

const cx = classNames.bind(styles);

function Radio() {
    return ( 
      
        <div>
         <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>
           <BgNen />
           </div>
           </div>
        </div>
     );
}

export default Radio;