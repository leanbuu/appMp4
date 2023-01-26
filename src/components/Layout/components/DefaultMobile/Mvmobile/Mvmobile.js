
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import classNames from "classnames/bind";
import styles from '../Mvmobile/Mvmobile.module.scss'
import Song from "../../../../../SongContext/Song";





const cx = classNames.bind(styles);



function Mvmobile() {
    const { handleChuyen, handleChuyenBack } = useContext(Song);
    const [query, setQuery] = useState("");
    const [dataVideo, setDataVideo] = useState([]);
    const [isCall, setIsCall] = useState(false);
    const [show, setShow] = useState('show');
    const [btn , setBtn] = useState('Trở Về')
    const [check, setCheck] = useState()
    const [doi , setDoi] = useState('block')
    const [doi1, setDoi1] = useState('none')
    const  handleShow = () =>{
        setShow(show === 'show' ? 'showing' : 'show');
        setDoi(doi === 'block' ? 'none' : 'block');
        setDoi1(doi1 === 'none' ? 'block' : 'none') 
    }
    const handleSearch = async () => {
      let res = await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: "5",
          key: "AIzaSyAwZKOK8Pxi9K-NiawgeQ-cn3shAGR0XQI",
          q: query,
        },
      });
      if (res && res.data && res.data.items) {
        console.log(res);
        setDataVideo(res.data.items);
        setIsCall(true);
      }
    };
  
    const handleAddVideo = async () => {
      let res = await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: "10",
          key: "AIzaSyAwZKOK8Pxi9K-NiawgeQ-cn3shAGR0XQI",
          q: query,
        },
      });
      if (res && res.data && res.data.items) {
        const data = res.data.items.slice(5, 9);
        const newArr = [...dataVideo, ...data];
        setDataVideo(newArr);
        setIsCall(true);
      }
    };
    
    return (
      <div className={cx('youtube')}>
          <div className={cx('title')}>
            Tìm Kiếm MV
          </div>
          <div onClick={handleShow} className={cx('search')}>
          <input   className={cx(show)}
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
         </div>
         <div  >
          <button style={{display : `${doi}` }} className={cx('btn')} onClick={handleChuyenBack}>
            Trở Về
        </button>
        <button style={{display : `${doi1}` }} className={cx('btn')} onClick={handleSearch}>
            Tìm Kiếm
        </button>
        </div>
        
  
        {/**Result */}
        <div className={cx('listmv')}>
          {dataVideo &&
            dataVideo.length > 0 &&
            dataVideo.map((item, index) => (
              <div className={cx("itemv")} key={index}>
                {/**left */}
                <div className={cx('left')}>
                  
                  <iframe style={{border: '0px solid transparent', borderRadius: '10px', width: '100%', height: '190px'}}
                    className={cx("if")}
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                 
                </div>
                {/**right */}
                <div className={cx("right")}>
                  {/**title */}
                  <div className={cx('title')}>
                      {item.snippet.title}
                  </div>
                  {/**create at */}
                  {/**author */}
                  <div className={cx('tacgia')}>
                    <img
                      className={cx('imgta')}
                       src={item.snippet.thumbnails.high.url}
                       alt=''
                    />
                    <div className={cx('name')}>
                      
                      {item.snippet.channelTitle}
                     
                    </div>
                  </div>
                  {/**description */}
                </div>
              </div>
            ))}
        </div>
        {isCall === true && (
          <div className={cx('add')}>
            <button className={cx('btnadd')} onClick={handleAddVideo}>
              Xem Thêm
            </button>
          </div>
        )}
      </div>
    );
  };
  

export default Mvmobile;