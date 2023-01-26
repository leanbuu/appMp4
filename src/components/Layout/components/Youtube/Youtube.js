import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import classNames from "classnames/bind";
import styles from '../Youtube/Youtube.module.scss';






const cx = classNames.bind(styles);

const Youtube = () => {

  const [query, setQuery] = useState("");
  const [dataVideo, setDataVideo] = useState([]);
  const [isCall, setIsCall] = useState(false);
  const [show, setShow] = useState('show');
  const  handleShow = () =>{
      setShow(show === 'show' ? 'showing' : 'show');
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
  const handleKey = (e) =>{
    if(e.key === 'Enter'){
      handleSearch()
    }
  }
  return (
    <div className={cx('youtube')}>
      <div className={cx('search')}>
        <div className={cx('title')}>
          Tìm Kiếm MV
        </div>
        <div className={cx('input')}>
        <input onClick={handleShow}  className={cx(show)}
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
        />
        </div>
      </div>

      {/**Result */}
      <div className={cx('listmv')}>
        {dataVideo &&
          dataVideo.length > 0 &&
          dataVideo.map((item, index) => (
            <div className={cx("itemv")} key={index}>
              {/**left */}
              <div className={cx('left')}>
                
                <iframe style={{border: '0px solid transparent', borderRadius: '10px'}}
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
                <div>
                  <span className={cx('sub')}>
                    {moment(item.snippet.publishTime).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </span>
                </div>
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
                <div>
                  <div className={cx('mota')}>
                    {item.snippet.description}
                  </div>
                </div>
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

export default Youtube;
