
import classNames from "classnames/bind";
import styles from '../Search/Search.module.scss';
import { SearchIcon } from "../Icons/Icons";
// import { useState } from "react";

const cx = classNames.bind(styles);



function Search() {
    return ( 
        <div className={cx('search')}>
            <div className={cx('inputt')}>
            <input  type='text' className={cx('inputt-text')}
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            ></input>
            </div>
            <button className={cx('search-btn')}>
                <SearchIcon></SearchIcon>
            </button>
        </div>
     );
}

export default Search;