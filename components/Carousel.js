import {v4 as uuidv4} from 'uuid';
import { faAngleLeft, faCaretSquareLeft , faCaretSquareRight , faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useEffect, useRef, useState} from 'react';

import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper/bundle';

import styles from '../styles/misc.module.scss';
import DesignerHeading from './DesignerHeading';

// Import Swiper styles


SwiperCore.use([Pagination,Navigation]);

const CarouselSingleOnOnePage = (props)=>{
    return (
        <div className={styles['carousel-wrapper']}>
            <SwiperReact slidesPerView={1} spaceBetween={0} loop={true} pagination={{
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
            </SwiperReact>
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
    <DesignerHeading underline={props.underline}>{props.heading}</DesignerHeading>
    <SwiperReact 
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
            if(child === null){
                return null;
            }
            return <SwiperSlide key={index}>{child}</SwiperSlide>
        })} 
    </SwiperReact>
    <span ref={leftBtn} className={styles['btn-large'].concat(' ' , styles['left'])}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></span>
    <span ref={rightBtn} className={styles['btn-large'].concat(' ' , styles['right'])}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
    </div>
}

const CarouselMultipleSlidesNonReact = (props)=>{
    const leftBtn = useRef(null);
    const rightBtn = useRef(null);
    const swiper_wrapper = useRef(null);
    const swiper = useRef(null);
    const swiper_parent = useRef(null);

    function checkForMedia(matches_bool){
        if(matches_bool){
            if(swiper.current.destroy){
                swiper.current.destroy(true , true);
                Array.from(swiper_parent.current.children).forEach((child)=>{
                    child.setAttribute('style','');
                })
            }
        }
        else{
            let new_swiper = new Swiper(swiper_wrapper.current , {
                slidesPerView : 1,
                spaceBetween : 10,
                navigation : {nextEl : rightBtn.current , prevEl : leftBtn.current},
                breakpoints : props.breakpoints,
            }
            )
            swiper.current = new_swiper;
        }
    }

    useEffect(()=>{

        let media_query = window.matchMedia('(max-width:500px)');
        checkForMedia(false);
        checkForMedia(media_query.matches);
        media_query.addEventListener('change',(e)=>{
            checkForMedia(e.matches);
        })

    },[])

    return <div style={{padding : props.padding}} className={styles['carousel-wrapper'].concat(' ' , styles['category-carousel'] , ' ' , styles['swiper-grid'])}>
    <DesignerHeading>{props.heading}</DesignerHeading>
    <div className={'swiper-container'} ref={swiper_wrapper}>
        <div className={'swiper-wrapper'} ref={swiper_parent}>
                {Array.from(props.children).map((child , index)=>{
                    return <div key={index} className={'swiper-slide'}>{child}</div>
                })} 
        </div>
    </div>
    <span ref={leftBtn} className={styles['btn-large'].concat(' ' , styles['left'])}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></span>
    <span ref={rightBtn} className={styles['btn-large'].concat(' ' , styles['right'])}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
    </div>
}

export default CarouselSingleOnOnePage;
export {CarouselMultipleSlidesOnOnePage , CarouselMultipleSlidesNonReact}