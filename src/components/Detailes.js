import React from 'react'
import styled from 'styled-components'

function Detailes() {
  return (
    <Container>
        <Background>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNuA-KlqYs3Ry5atA0ArMDrrYEKvBgyfCPg&usqp=CAU"/>
        </Background>
        <ImageTitle>
        <h1>This is your first ever made easy way to find your hostel without any stress..</h1>

        </ImageTitle>
        <SubTitle>

        </SubTitle>

        <Description>
            <h3>We got you this semester have stress free looking for your bed..</h3>

        </Description>


    </Container>
  )
}

export default Detailes
const Container=styled.div`
min-height:calc(100vh- 70px);
padding:0 calc(3.5vw + 5px);
position:relative;


`

const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:150%;
    height:100%;
    object-fit:cover;
}

`

const ImageTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;


`

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;

`

const Description=styled.div`
line-height:1.4;
font-size:20px;
max-width:760px;
margin-top:16px;
color:rgb(249,249,249);


`