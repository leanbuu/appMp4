import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment, useState } from "react";
import  Song  from "./SongContext/Song";
import PlayList from "./PlayListContext/PlayList";
import { dataSong } from "./dataSong";
import { dataPlaylist } from "./dataPlaylist";

function App() {
  const [playlist, setPlaylist] = useState(dataPlaylist[0]);
  const [song, setSong] = useState(dataSong[0]);
  // const [isShowMenu, setIsShowMenu] = useState(false);
  const [dong1, setDong1] = useState('block')
  const [mo1, setMo1] = useState('none')
  const [mo, setMo] = useState("none");
  const [dong, setDong] = useState('block');
  const [mopc, setMopc] = useState('none');
  const [ac, setAc] = useState(2);
  const [xoay, setXoay] = useState('img')
  const [moimg, setMoimg] = useState('none')
  const truyen = (active) =>{
    setAc(active)
    console.log(ac)
    console.log(active)
  }
  const handleBat = (id) =>{
    setDong(dong === 'block' ? "none" : 'none');
    setMo(mo === "none" ? 'block' : "block");
    const newSong = dataSong.find((item) => item.id === id);
    setSong(newSong);
  }
  const handleXoay = (id) =>{
    setXoay(xoay === 'img' ? 'imgxoay' : 'imgxoay')
    setMoimg(moimg === 'none' ? 'block' :'block')
  }
  const handleDung = (id) =>{
    setXoay(xoay === 'imgxoay' ? 'img' : 'img' )
    setMoimg(moimg === 'block' ? 'none' :'none')
  }
  const handlePlayList = (id) =>{
    const newList = dataPlaylist.find((item) => item.id === id);
    setPlaylist(newList);
  }
  const handlePlaySong = (id) => {
    setDong(dong === 'block' ? "none" : 'block');
    setMo(mo === "none" ? 'block' : "none");
    setMopc('block')
    setDong1('none');
    setMo1('block');
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

  // const upDateStateMenu = (value) => {
  //   setIsShowMenu(value);
  // };

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
                      moimg,
                      dong1,
                      mo1,
                      handleDung,
                      xoay, 
                      handleXoay,
                      ac,
                      truyen,
                      handleBat,
                      mopc,
                      mo,
                      dataSong,
                      handlePlaySong,
                      song,
                      dong,
                      playlist,
                      // upDateStateMenu,
                    }}
                  >
                  <PlayList.Provider
                   value={{
                    handlePlayList,
                    playlist,
                    // upDateStateMenu,
                  }}
                >
                 
                    <Layout>
                      <Page />
                    </Layout>
                    </PlayList.Provider>
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
