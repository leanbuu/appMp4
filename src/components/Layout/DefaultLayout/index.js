import classNames from "classnames/bind";
import styles from "../DefaultLayout/DefaultLayout.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuSelect from "../components/MenuSelect";
import { useEffect, useState } from "react";
import DefaultMobile from "../components/DefaultMobile";

import List from "../components/List";
import ListNgheSi from "../components/ListNgheSi";
import ListSlider from "../components/ListSlider";
import MenuNgheSi from "../components/MenuNgheSi";
import MenuBest from "../components/MenuBest";
import Footer from "../components/Footer";
import ListSliderCasi from "../components/ListSliderCasi";
import SuKien from "../components/SuKien";
import img1 from "../../../assets/Img-sukien1.webp";
import img2 from "../../../assets/Img-sukien2.webp";
import img3 from "../../../assets/Img-sukien3.webp";

import ListSliderNhacMoi from "../components/ListSliderNhacMoi";
import PlaySong from "../components/PlaySong";

import { useContext } from "react";
import Song from "../../../SongContext/Song";

const cx = classNames.bind(styles);
const SELECT = [
  {
    id: 1,
    name: "TẤT CẢ",
  },
  {
    id: 2,
    name: "VIỆT NAM",
  },
  {
    id: 3,
    name: "QUỐC TẾ",
  },
];

function detectDevice() {
  const widthEle = window.innerWidth;
  return widthEle;
}

function DefaultLayout({ children }) {
  const [widthEle, setWidthEle] = useState(0);
  let resizeScreen = false;

  const context = useContext(Song);

  useEffect(() => {
    setWidthEle(detectDevice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.addEventListener("resize", () => {
    clearTimeout(timeOut);
    timeOut();
    if (resizeScreen) setWidthEle(detectDevice());
  });

  let timeOut = setTimeout(() => {
    resizeScreen = true;
  }, 1000);

  const anNut = () => {
    console.log("an nut");
  };

  return (
    <>
      {widthEle > 1024 ? (
        <div className={cx("wrapper")}>
          <Sidebar />

          <div className={cx("container")}>
            <Header />
            <div className={cx("content")}>
              <div className={cx("slider")}>
                <ListSlider />
              </div>
              <button onClick={anNut}></button>
              <div className={cx("title")}>Hay nhất của 2022 ⭐</div>
              <ListNgheSi props={<MenuBest />} />
              <div style={{ marginBottom: "20px" }} className={cx("title")}>
                Mới Phát Hành
              </div>
              <MenuSelect items={SELECT}></MenuSelect>
              <div className={cx("title")}>Nghệ Sĩ Đang Được Yêu Thích</div>
              <ListNgheSi props={<MenuNgheSi />} />
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
          <div>
            <PlaySong />
          </div>
        </div>
      ) : (
        <DefaultMobile />
      )}
    </>
  );
}

export default DefaultLayout;
