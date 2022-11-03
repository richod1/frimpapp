import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function ImgSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slideToScroll:1,
        autoplay:true
    };
  return (
    <Carousel {...settings}>
     <Wrap>
        <img src="/images/h5.jpg"/>
     </Wrap>
     <Wrap>
        <img src="/images/h6.jpg"/>
     </Wrap>
     <Wrap>
        <img src="/images/h7.jpg"/>
     </Wrap>
     <Wrap>
        <img src="/images/h9.jpg"/>
     </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel=styled(Slider)`
margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,154,171);
    }
}
.li.slick-active button::before{
    color:white;

}
.slick-list{
    overflow:visible;
}
button{
    z-index:1;
}

`

const Wrap=styled.div`
cursor:pointer;

img{
    border:4px solid transparent;
    border-radius:4px;
    width:100%;
    height:70%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:300ms;
    &:hover{
        border:4px solid rgb(246,246,249,0.8);
    }

}
`



