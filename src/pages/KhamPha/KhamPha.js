import classNames from "classnames/bind";
import styles from "../KhamPha/KhamPha.module.scss";

import List from "../../components/Layout/components/List";
import ListNgheSi from '../../components/Layout/components/ListNgheSi'
import ListSlider from "../../components/Layout/components/ListSlider";
import MenuNgheSi from "../../components/Layout/components/MenuNgheSi";
import MenuBest from '../../components/Layout/components/MenuBest'
import ListSliderCasi from "../../components/Layout/components/ListSliderCasi";
import SuKien from "../../components/Layout/components/SuKien";
import img1 from "../../assets/Img-sukien1.webp";
import img2 from "../../assets/Img-sukien2.webp";
import img3 from "../../assets/Img-sukien3.webp";
import MenuSelect from "../../components/Layout/components/MenuSelect";
import Footer from "../../components/Layout/components/Footer";

import ListSliderNhacMoi from "../../components/Layout/components/ListSliderNhacMoi";
import { dataPlaylist } from "../../dataPlaylist";
import Header from "../../components/Layout/DefaultLayout/Header";


const cx = classNames.bind(styles);

const SELECT = [
    {
      id: 1,
      danhmuc: 2,
      name: "TẤT CẢ",
    },
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


function KhamPha() {
    return ( 
        <>
          <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>
        <div className={cx("slider")}>
                <ListSlider />
              </div>

              <div className={cx("title")}>Hay nhất của 2022 ⭐</div>
              <ListNgheSi props={<MenuBest />} />
             <div style={{ marginBottom: "20px" }} className={cx("title")}>
                Mới Phát Hành
              </div>
              <MenuSelect items={SELECT}></MenuSelect>
              <div className={cx("title")}>Nghệ Sĩ Đang Được Yêu Thích</div>
              <ListNgheSi props={<MenuNgheSi items={dataPlaylist} />} /> 
             
              <div className={cx("playlist")}>
                <List props={"Có Thể Bạn Muốn Nghe"} />
                <div style={{ marginTop: "48px" }}>
                  <List props={"Nhạc Mới Mỗi Ngày"} />
                </div>
                 
                <div className={cx("slidercasi")}>
                  <ListSliderCasi />
                </div>
                
                <div style={{ marginBottom: "20px" }} className={cx("title")}>
                  Nhạc Mới
                </div>
                
                <div className={cx("listnhacmoi")}>
                  <ListSliderNhacMoi />
                </div>
               
                <div style={{ marginBottom: "20px" }} className={cx("title")}>
                  Sự Kiện
                </div> 
                <div className={cx("listsukien")}>
                  <SuKien
                    casi={img2}
                    name={"Sinh Nhật Sao x Hương Giang"}
                    date={"00:00 Thứ Năm, 29 tháng 12"}
                  />
                  <SuKien
                    casi={img1}
                    name={"Người Thương Em Đây Mà- Đinh..."}
                    date={"19:00 Thứ Năm, 29 tháng 12"}
                  />
                  <SuKien
                    casi={img3}
                    name={"Thương Phận Đời Con Gái - Hồ Việt"}
                    date={"19:00 Thứ Sáu, 30 tháng 12"}
                  />
                </div>
                <Footer />
                </div> 
              </div>
              </div>
            </>
     );
}

export default KhamPha;