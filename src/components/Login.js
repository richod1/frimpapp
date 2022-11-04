import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
  <Container>
    <KTA>
        <KTALogoOne src=""/>
        <SignUp>GET ALL HERE!!</SignUp>
        <Description>This is your first ever made easy way to find your hostel without any stress..
        We got you this semester have stress free looking for your bed..
        </Description>
        <CTALogoTwo src=""/>

    </KTA>

  </Container>
  )
}

export default Login

const Container=styled.div`
position:relative;
height: calc(100vh - 70px);
display:flex;
justify-content:center;
align-items:top;

&:before{
    position:absolute;
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    backgroung-image:url(" ");
    background-position:top;
    background-size:cover;
    background-repeat: no-repeat;
    z-index:-1;
    opacity:0.7;
}

`

const KTA =styled.div`
max-width:650px;

width:90%;
padding:80px 40px;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;

`

const KTALogoOne=styled.img`
`

const SignUp=styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;
&:hover{
    background:#0483ee;
}


`

const Description=styled.p`
font-size:15px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`

const CTALogoTwo=styled.img`
width:90%;
`

