import classNames from "classnames/bind";
import styles from '../NhacMoi/NhacMoi.module.scss';


const cx = classNames.bind(styles);


function NhacMoi( {img, name, tacgia, order, date}) {
    return (
        <div className={cx('nhacmoi')}>
        <div className={cx('item')}>
        <div className={cx('media')}>
            <div className={cx('medialeft')}>
            <div className={cx('anh')}>
            <img src={img} className={cx('img')} alt=''></img>
            </div>
            </div>
                                  <div className={cx('contentnhacmoi')}>
                                      <div>
                                          <div className={cx('titlenhacmoi')}>{name}</div>
                                          <div className={cx('tacgia')}>{tacgia}</div>
                                      </div>
                                      <div>
                                          <div className={cx('order')}>{order}</div>
                                          <div className={cx('date')}>{date}</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
     );
}

export default NhacMoi;