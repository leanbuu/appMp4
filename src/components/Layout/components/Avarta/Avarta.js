
import classNames from "classnames/bind";
import styles from '../Avarta/Avarta.module.scss';

const cx = classNames.bind(styles);

function Avarta() {
    return ( 
        <button className={cx('avarta')}>
            <img className={cx('img-avarta')} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275622483_1203181200216535_1427750920873467953_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RR9eGGBzq0sAX_gkcbw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyJABf9w9nW6aq6YqjfuxrT9gGXRfSdiPOOPbbi4Z0YA&oe=6385E176" alt="" ></img>
        </button>
     );
}

export default Avarta;