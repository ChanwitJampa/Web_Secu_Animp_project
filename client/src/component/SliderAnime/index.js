import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, withRouter } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import './index.scss'
import Dataanime from "../../assets/anime.json"
const SliderAnime=(props)=>{
    const {tagAnime,mode,valueOfMode} =props
    const [animeList,setAnimeList]=useState([])
    const filterAnime=(item)=>{
        if(tagAnime=="New Anime"){
            if(item.year=="2022"&&item.seasonal=="Summer"){
                return item
            }
        }
        if(mode=="year"){
            if(valueOfMode==item.year){
                return item
            }
        }
    }
    useEffect(()=>{
        if(mode=="topanime"){
            setAnimeList(Dataanime.slice(1,valueOfMode).sort((firstItem, secondItem) => secondItem.score - firstItem.score));
        }else{
            setAnimeList(Dataanime.filter(filterAnime).sort((firstItem, secondItem) => secondItem.score - firstItem.score))
            
        }
    }
    )
    
    
    return(
        <div className="slide-anime-header">
            <h2>{tagAnime}</h2>
            <Swiper
              slidesPerView={7}
              spaceBetween={20}
              slidesPerGroup={7}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              id="swiper-anime"
              >
                {animeList.map((item,index)=>
                  <SwiperSlide key={index} className='swiper-slide-anime'><img src={item.image}></img></SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default SliderAnime;