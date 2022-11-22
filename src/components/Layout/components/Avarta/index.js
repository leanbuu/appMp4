
import classNames from "classnames/bind";
import styles from '../Avarta/Avarta.module.scss';

const cx = classNames.bind(styles);

function Avarta() {
    return ( 
        <button className={cx('avarta')}>
            <img className={cx('img-avarta')} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/315348192_1350049685531799_6752610701868850154_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mpv_npLcVmIAX_ZycB-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAxNMp6KIW89woBcFTcsLJat8RkqLSaoyE4KrHWsvDFFg&oe=63817AE1" alt="" ></img>
        </button>
     );
}

export default Avarta;