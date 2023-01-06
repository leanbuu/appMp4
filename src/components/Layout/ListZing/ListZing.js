import classNames from "classnames/bind";
import styles from './ListZing.module.scss';
import ItemZing from "../ItemZing/ItemZing";
import { useContext } from "react";
import Song from "../../../SongContext/Song";


const cx = classNames.bind(styles);

function ListZing( {items =[], isActive} ) {
   const { song } = useContext(Song);
   const renderItems = () => {
      return items.map((item, index) => (
          <>
          { 
          isActive === item.danhmuc &&
                  <ItemZing key={item.id} data={item} bien={song.id}/> 
          }
          </>
      ))
  }
  return ( 
      <div className={cx('list')}>
         {renderItems()}
      </div>
      
   );
}


export default ListZing;