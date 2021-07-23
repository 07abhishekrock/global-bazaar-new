import {v4 as uuidv4} from 'uuid';
import { faAngleLeft, faCaretSquareLeft , faCaretSquareRight , faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useEffect, useRef, useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/misc.module.scss';
import DesignerHeading from './DesignerHeading';

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

    const leftBtn = useRef(null);
    const rightBtn = useRef(null);

    return <div style={{padding : props.padding}} className={styles['carousel-wrapper'].concat(' ' , styles['category-carousel'])}>
    <DesignerHeading>{props.heading}</DesignerHeading>
    <Swiper 
        slidesPerView={1} 
        spaceBetween={10} 
        navigation={{nextEl : rightBtn.current , prevEl : leftBtn.current}}
        breakpoints={props.breakpoints} className="mySwiper"
        onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = leftBtn.current
              swiper.params.navigation.nextEl = rightBtn.current
    
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
        }}
    >
        {Array.from(props.children).map((child , index)=>{
            return <SwiperSlide key={index}>{child}</SwiperSlide>
        })} 
    </Swiper>
    <span ref={leftBtn} className={styles['btn-large'].concat(' ' , styles['left'])}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></span>
    <span ref={rightBtn} className={styles['btn-large'].concat(' ' , styles['right'])}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
    </div>
}

export default CarouselSingleOnOnePage;
export {CarouselMultipleSlidesOnOnePage}