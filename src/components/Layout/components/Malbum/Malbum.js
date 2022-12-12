

import classNames from "classnames/bind";
import styles from '../Malbum/Malbum.module.scss'


const cx = classNames.bind(styles);


function Malbum({img , title, artist}) {
    return (
      <div  className={cx('item')}>
      <div className={cx('album')}>
          <img className={cx('img')} alt='' src={img}></img>
          <div>
              <div className={cx('title')}>{title}</div>
              <div className={cx('artist')}>{artist}</div>
          </div>
      </div>
      </div>
      );
}

export default Malbum;