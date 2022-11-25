
import classNames from "classnames/bind";
import styles from '../DefaultLayout/DefaultLayout.module.scss';

import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuSelect from "../components/MenuSelect/MenuSelect";


const cx = classNames.bind(styles);

const SELECT = [
    {
        id: 1,
        name: 'TẤT CẢ'
    },
    {
        id: 2,
        name: 'VIỆT NAM'
    },
    {
        id: 3,
        name: 'QUỐC TẾ'
    }
]

function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                <MenuSelect items={SELECT}></MenuSelect>
                </div>
            </div>

        </div>
     );
}

export default DefaultLayout;