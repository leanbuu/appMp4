import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment, useState } from "react";
import  Song  from "./SongContext/Song";
import PlayList from "./PlayListContext/PlayList";
import { dataSong } from "./dataSong";
import { dataPlaylist } from "./dataPlaylist";

function App() {
  const [onlist, setOnlist] = useState(0)
  const [hat , setHat] = useState(false)
  const [bo, setBo] = useState(false);
  const [list , setList] = useState(0);
  const [songing , setSonging] = useState(0);
  const [playlist, setPlaylist] = useState(dataPlaylist[0]);
  const [song, setSong] = useState(dataSong[0]);
  const [dong1, setDong1] = useState('block')
  const [mo1, setMo1] = useState('none')
  const [mo2, setMo2] = useState('none')
  const [mo, setMo] = useState("none");
  const [moadd, setMoadd] = useState('none');
  const [dong, setDong] = useState('block');
  const [dongadd, setDongadd] = useState('block');
  const [mopc, setMopc] = useState('none');
  const [ac, setAc] = useState(2);
  const [xoay, setXoay] = useState('img')
  const [moimg, setMoimg] = useState('none')
  const [album, setAlbum] = useState(1);
  const [anlist, setAnlist] = useState('none')
  const [chuyen , setChuyen] = useState(0)
  const truyen = (active) =>{
    setAc(active)
  }
  const handleBat = (id) =>{
    setDong(dong === 'block' ? "none" : 'none');
    setMo(mo === "none" ? 'block' : "block");
    const newSong = dataSong.find((item) => item.id === id);
    setSong(newSong);
  }
  const handleBatadd = (id) =>{
    setDongadd(dongadd === 'block' ? "none" : 'none');
    setMoadd(moadd === "none" ? 'block' : "block");
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
    setMoadd(moadd === "none" ? 'block' : "none");
    setDong(dong === 'block' ? "none" : 'block'); 
    setHat(false)
    setMo2('block');
    setAlbum(id);
    const newList = dataPlaylist.find((item) => item.id === id);
    setPlaylist(newList);
  }
  const handlePlaySongadd = (id , album) => {
    const newSong = dataSong.find((item) => item.id === id);
    setSong(newSong);
    setAnlist('block')
    setHat(true)
    setList(id)
    setOnlist(album);
    setDong1('none')
  }
  const handleChuyen = (id) =>{
    if(id === 2 ){
    setDong(dong === 'block' ? "none" : 'block');
    setMo(mo === "none" ? 'block' : "none");
    setChuyen(id)
    setMo1('none')
    }
  }
  const handlePlaySong = (id) => {
    if(id < 2){
      setMo1('none')
     }else{
      setMo1('block')
     }
    setDong(dong === 'block' ? "none" : 'block');
    setMo(mo === "none" ? 'block' : "none");
    setMopc('block')
    setDong1('none');
    setMo2('none')
    const maxLength = dataSong.length;
    console.log(maxLength)
    const newSong = dataSong.find((item) => item.id === id);
    setSong(newSong);
    setBo(bo === true ? false : true)
    setSonging(id)
    setAnlist('none');
    setXoay('img')
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
                      chuyen,
                      handleChuyen,
                      onlist,
                      songing,
                      list,
                      bo,
                      anlist,
                      hat,
                      handlePlaySongadd,
                      handleBatadd,
                      moadd,
                      album,
                      moimg,
                      dong1,
                      mo1,
                      mo2,
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
                    onlist,
                    album,
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
