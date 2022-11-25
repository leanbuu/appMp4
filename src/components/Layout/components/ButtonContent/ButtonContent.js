
import classNames from "classnames/bind";
import styles from '../ButtonContent/ButtonContent.module.scss'

const cx = classNames.bind(styles);

function ButtonContent( { data, bien }) {
    let active = bien;
    return ( 
        <button className={`${styles.select} ${data?.id === active ?styles.active:""}`}>
            {data.name}
        </button>
     )
}

export default ButtonContent;