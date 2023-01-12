

import classNames from "classnames/bind";
import styles from "./MV.module.scss";
import Header from "../../components/Layout/DefaultLayout/Header";
import Youtube from "../../components/Layout/components/Youtube/Youtube";

const cx = classNames.bind(styles);

function MV() {
    return ( 
      
        <div>
         <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>   
           <Youtube />
           </div>
           </div>
        </div>
     );
}

export default MV;