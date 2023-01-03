import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment, useState } from "react";
import Song from "./SongContext/Song";

import { dataSong } from "./dataSong";

function App() {
  const [song, setSong] = useState(dataSong[0]);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [thu, setThu] = useState("none");
  console.log("check menu :>>", isShowMenu);

  // xu ly play
  const handlePlaySong = (id) => {
    // console.log("vo handle play");
    // console.log(id);
    setThu("block");
    // console.log(thu);
    const maxLength = dataSong.length;
    // console.log("max", maxLength);
    if (id < 0) {
      setSong(dataSong[maxLength - 1]);
      return;
    }
    if (id > maxLength - 1) {
      setSong(dataSong[0]);
      return;
    }
    const newSong = dataSong.find((item) => item.id === id);
    setSong(newSong);
  };

  const upDateStateMenu = (value) => {
    setIsShowMenu(value);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Song.Provider
                    value={{
                      thu,
                      dataSong,
                      handlePlaySong,
                      song,
                      upDateStateMenu,
                    }}
                  >
                    <Layout>
                      <Page />
                    </Layout>
                  </Song.Provider>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
