import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function Header() {
  return (
    <Fade>
    <Nav>
        <Logo src=""/>
        <NavMenu>
           <a>
           
           <img src=""/>
            <span>Contact Us</span>
           </a>
           <a>
           <img src=""/>
            <span>FAQ</span>
           </a>
           <a>
           <img src=""/>
            <span>Locations</span>
           </a>
           <a>
           <img src=""/>
            <span>About Us</span>
           </a>

        </NavMenu>
        <Fade>
        <Buttons>
            <LoginBtn>
               <ItemText>
                Login
               </ItemText>
             </LoginBtn>
             <Fade>
            <RegisterBtn>
             <ItemText>
                Register
             </ItemText>
            </RegisterBtn>
            </Fade>
        </Buttons>
        </Fade>

        <UserImg src=""/>
    </Nav>
    </Fade>
  )
}

export default Header
const Nav=styled.nav`
height:70px;
background:#8B7765;
display:flex;
padding:0 3px;
align-items:center;
overflow-x:hidden
`
const Logo=styled.img`

`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    cursor:pointer;
    align-items:center;
    padding:0 12px;
    img{
        height:25px;
        
    }
    span{
        font-size:18px;
        letter-spacing:1.42px;
        position:relative;

        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transfor-origin:left center;
            transitional:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`
const UserImg=styled.img`
width:40px;
height:40px;
border-radius:50px;
cursor:pointer;
border:1px solid black;
`
const Buttons=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:2px;
@media(max-width:700px){
    flex-direction:column;
}



`

const LoginBtn=styled.div`
background-color:rgba(23,26,32,0.3);
height:40px;
width:80px;
color:white;
display:flex;
justify-contents:center;
align-items:center;
text-align:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;
position:center
font-size:12px;



`
const RegisterBtn=styled(LoginBtn)`
background-color:white;
opacity:0.65;
color:black;
font-weigth:bold;
text-align:center;



`
const ItemText = styled.div`
text-align:center;
align-items:center;
justify-contents:center;
`


