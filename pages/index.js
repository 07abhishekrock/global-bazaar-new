import Head from 'next/head'
import Image from 'next/image'
import Carousel, { CarouselMultipleSlidesOnOnePage } from '../components/Carousel'
import Seperator from '../components/Seperator'
import styles from '../styles/Home.module.scss'

const carouselImages = [
  {
    imageLink : 'https://images.unsplash.com/photo-1597423244037-519742d0a9f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    text : 'Essentials'
  },
  {
    imageLink : 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    text : 'Headphones'
  },
  {
    imageLink : 'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    text : 'Televisions'
  },
  {
    imageLink : 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    text : 'Computers'
  },
  {
    imageLink : 'https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    text : 'Fashion'
  }

]

export default function Home() {
  return (
    <>
    <Seperator height={"2em"}/>
    <Carousel> 
      {carouselImages.map((carousel_unit , index)=>{
        return <div key={index} className={styles['carousel-image']} style={{backgroundImage : `url('${carousel_unit.imageLink}')`}}></div>
      })}
    </Carousel>
    <Seperator height={"2em"}/>
    <CarouselMultipleSlidesOnOnePage 
      heading={"Shop By Categories"}
      padding={'1em'}
      breakpoints = {{
      "@0.00": {
          "slidesPerView": 1,
          "spaceBetween": 10
      },
      "@0.75": {
          "slidesPerView": 3,
          "spaceBetween": 20
      },
      "@1.00": {
          "slidesPerView": 5,
          "spaceBetween": 40
      },
      "@1.50": {
          "slidesPerView": 6,
          "spaceBetween": 50
        }
      }
    }  
    
    >
      {carouselImages.map((carousel_unit , index)=>{
        return <div key={index} className={styles['image-with-text']}>
          <img src={carousel_unit.imageLink}/>
          <span>{carousel_unit.text}</span>
        </div>
      })}
    </CarouselMultipleSlidesOnOnePage>
    </>
  )
}
