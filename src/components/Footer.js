import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <Wrapper>
            <List>
            <ListItems>Guide</ListItems>
            <ListItems>About Us</ListItems>
            <ListItems>Locations</ListItems>
            <ListItems>Contact Us</ListItems>
            <ListItems>FAQ</ListItems>
            </List>
            <Copyright>
                Degraft Frimpong  Ⓒ
            </Copyright>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container=styled.div`
height:10%;
border-radius:10px;
background-color:#111;
color:lightgrey;
justify-contents:center;
align-items:center;

`

const Wrapper=styled.div`
padding:20px;
display:flex;
justify-contents:center;
align-items:center;
justify-contents:space-between;
@media only screen and (max-width:40px){
    padding:10px;
}
`

const List=styled.ul`
cursor:pointer;
padding:0;
margin:0;
list-style:none;
display:flex;
justify-contents:center;
align-items:center;

`
const ListItems=styled.li`
margin-right:20px;
cursor:pointer;
justify-contents:center;
align-items:center;
@media only screen and (max-width: 480px){
    margin-right:10px;
    font-size:14px;
}

`

const Copyright=styled.span`
cursor:pointer;
@media only screen and (max-width:480px){
    font-size:14px;
}
`