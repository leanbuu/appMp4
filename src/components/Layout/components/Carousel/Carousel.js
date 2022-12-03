import classNames from "classnames/bind";
import styles from '../Carousel/Carousel.module.scss';
import CarouselItem from "../CarouselItem";

const cx = classNames.bind(styles);


function Carousel() {
    return ( 
        <div className={cx('carousel')}>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
        </div>
     );
}

export default Carousel;