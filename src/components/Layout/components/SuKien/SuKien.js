import classNames from "classnames/bind";
import styles from '../SuKien/SuKien.module.scss';


import img1 from '../../../../assets/Img-avatarsukien1.jpg'


const cx = classNames.bind(styles);



function SuKien( {casi, name, date} ) {
    return ( 
        <div className={cx('itemsukien')}>
        <div className={cx('sukien')}>
            <div className={cx("eventanh")}>
            <div className={cx('bocimg')}>
            <img src={casi} alt='' className={cx('imgsukien')}></img>
            <div className={cx('opaci')}></div>
            </div>
            <div className={cx('contentsukien')}>
                <span className={cx('tagsukien')}>SINH NHẬT SAO</span>
                <div className={cx('titlesukien')}>{name}</div>
                <div className={cx('subsukien')}>{date}</div>
            </div>
            </div>
            <div className={cx('event')}>
            <div className={cx('eventleft')}>
             <div className={cx('eventile')}>Lượt quan tâm</div> 
             <div className={cx('avarta')}>
             <div className={cx('textitem')}>+25</div>
                <div className="avartaitem">
                    <img src={img1} className={cx('imgitem')} alt=''></img>
                </div>
                <div className="avartaitem">
                    <img src={img1} className={cx('imgitem')} alt=''></img>
                </div>
                <div className="avartaitem">
                    <img src={img1} className={cx('imgitem')} alt=''></img>
                </div>
                <div className="avartaitem">
                    <img src={img1} className={cx('imgitem')} alt=''></img>
                </div>
                <div className="avartaitem">
                    <img src={img1} className={cx('imgitem')} alt=''></img>
                </div>
             </div>
            </div>
            <div className={cx('eventright')}>
                <button className={cx('btnsukien')}>QUAN TÂM</button>
            </div>
        </div>
        </div>
     </div>


     );
}

export default SuKien;