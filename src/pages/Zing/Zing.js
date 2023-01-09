
import classNames from "classnames/bind";
import styles from '../Zing/Zing.module.scss';
import BgNen from "../../components/Layout/components/BgNen/BgNen";
import ListZing from "../../components/Layout/ListZing/ListZing";
import { dataSong } from "../../dataSong";
import { useState, useContext } from "react";
import MenuSelectall from "../../components/Layout/components/MenuSelectall";
import Song from "../../SongContext/Song";
import Header from "../../components/Layout/DefaultLayout/Header";



const cx = classNames.bind(styles);
const SELECT = [
   {
     id: 2,
     danhmuc: 2,
     name: "VIỆT NAM",
   },
   {
     id: 3,
     danhmuc: 3,
     name: "QUỐC TẾ",
   },
 ];

function Zing() {
   const songContext = useContext(Song);
   const { ac } = songContext;
    return ( 
        <div>
          <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>
           <BgNen />
          <div className={cx('zing')}>Mới Phát Hành</div>
          <div className={cx('cat')}></div>
          <div className={cx('list')}>
          <MenuSelectall items={SELECT}></MenuSelectall>
            <div className={cx('headerlist')}>
               <div className={cx('baihat')}>BÀI HÁT</div>
               <div className={cx('phathanh')}>PHÁT HÀNH</div>
               <div className={cx('thoigian')}>THỜI GIAN</div>
            </div>       
            <ListZing items={dataSong} isActive={ac}/>
          </div>
        </div>
        </div>
        </div>
     );
}

export default Zing;