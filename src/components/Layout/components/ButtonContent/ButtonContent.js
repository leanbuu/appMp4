// eslint-disable-next-line 
import classNames from "classnames/bind";
import styles from '../ButtonContent/ButtonContent.module.scss'



function ButtonContent( { data, bien }) {
    let active = bien;
    return ( 
        <button title={data.id}  className={`${styles.select} ${data?.id === active ?styles.active:""}`}>
            {data.name}
        </button>
     )
}

export default ButtonContent;