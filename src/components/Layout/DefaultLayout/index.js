
import classNames from "classnames/bind";
import styles from '../DefaultLayout/DefaultLayout.module.scss';

import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuSelect from "../components/MenuSelect";
import { useEffect, useState } from "react";
import DefaultMobile from "../components/DefaultMobile";
import MenuMedia from "../components/MenuMedia";
import List from "../components/List";
import ListNgheSi from "../components/ListNgheSi";
import ListSlider from "../components/ListSlider";
import MenuNgheSi from "../components/MenuNgheSi";
import MenuBest from "../components/MenuBest";



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


function detectDevice(){
    const widthEle = window.innerWidth
    return widthEle
}

function DefaultLayout({ children }) {
    const [widthEle, setWidthEle] = useState(0)
    let resizeScreen = false

    useEffect(() => {
        setWidthEle(detectDevice())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    window.addEventListener('resize', () => {
        clearTimeout(timeOut)
        timeOut()
        if(resizeScreen)
            setWidthEle(detectDevice())
    })

    let timeOut = setTimeout(() => {
        resizeScreen = true
    }, 1000)
    
    return (
        <>
        {
            widthEle > 1024 ?
            <div className={cx('wrapper')}>
                <Sidebar />
               
                <div className={cx('container')}>
                    <Header />
                    <div className={cx('content')}>
                    <div className={cx('slider')}>
                       <ListSlider />
                    </div>
                    <div className={cx('title')}>Hay nhất của 2022 ⭐</div>
                    <ListNgheSi props={<MenuBest />} />
                    <div style={{marginBottom: '20px'}} className={cx('title')}>Mới Phát Hành</div>
                    <MenuSelect items={SELECT}></MenuSelect>
                    <MenuMedia />
                    <div className={cx('title')}>Nghệ Sĩ Đang Được Yêu Thích</div>
                    <ListNgheSi props={<MenuNgheSi />} />
                    <div className={cx('playlist')}>
                        <List props={'Có Thể Bạn Muốn Nghe'} />
                        <div style={{marginTop: '48px'}}>
                            <List props={'Nhạc Mới Mỗi Ngày'} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className={cx('thumb')}>
                    <div className={cx('thumb-ver')}></div>
            
                </div>
                
            </div>
            : <DefaultMobile />
        }
        </>
     );
}

export default DefaultLayout;