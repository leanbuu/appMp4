import classNames from "classnames/bind";
import styles from "../DefaultLayout/DefaultLayout.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuSelect from "../components/MenuSelect";
import { useEffect, useState } from "react";
import DefaultMobile from "../components/DefaultMobile";
import Footer from "../components/Footer";
import PlaySong from "../components/PlaySong";


const cx = classNames.bind(styles);

function detectDevice() {
  const widthEle = window.innerWidth;
  return widthEle;
}

function DefaultLayout({ children }) {
  const [widthEle, setWidthEle] = useState(0);
  let resizeScreen = false;



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


  return (
    <>
      {widthEle > 1024 ? (
        <div className={cx("wrapper")}>
          <Sidebar />

         
              {children}
          
        
        <div>
            <PlaySong />
          </div>
        </div>
      ) : (
        <DefaultMobile props={children} />
      )}
    </>
  );
}

export default DefaultLayout;
