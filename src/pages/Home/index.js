

import classNames from "classnames/bind";
import styles from '../Home/Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return <div  className={cx('user')}>
        Home

    </div>;
}

export default Home;