import { faCaretSquareLeft , faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/misc.module.scss';

// Import Swiper styles


SwiperCore.use([Pagination,Navigation]);

const CarouselSingleOnOnePage = (props)=>{
    return (
        <div className={styles['carousel-wrapper']}>
            <Swiper slidesPerView={1} spaceBetween={0} loop={true} pagination={{
                "clickable": true
            }} navigation={
                {
                    "nextEl" : "#left",
                    "prevEl" : "#right"
                }
            } className="mySwiper"> 
            {Array.from(props.children).map((child , index)=>{
                return <SwiperSlide key={index}>{child}</SwiperSlide>
            })}
            </Swiper>
            <span id="left" className={styles['left']}>
                <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
            </span>
            <span id="right" className={styles['right']}>
                <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
            </span>
        </div>
    )
}

const CarouselMultipleSlidesOnOnePage = (props)=>{
    return <div style={{padding : props.padding}} className={styles['carousel-wrapper'].concat(' ' , styles['category-carousel'])}>
    <h2>{props.heading}</h2>
    <Swiper slidesPerView={1} spaceBetween={10} 
    navigation={true}
    breakpoints={props.breakpoints} className="mySwiper">

    {Array.from(props.children).map((child , index)=>{
        return <SwiperSlide key={index}>{child}</SwiperSlide>
    })} 

    </Swiper>
    </div>
}

export default CarouselSingleOnOnePage;
export {CarouselMultipleSlidesOnOnePage}