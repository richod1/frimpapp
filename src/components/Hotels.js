import React from 'react'
import styled from 'styled-components'

function Hotels() {
  return (
    
        <><h2>Hostels Available..</h2><Container>
          <Wrap>
              <img src="/images/h3.jpg" />
          </Wrap>
          <Wrap>
              <img src="/images/h2.jpg" />
          </Wrap>
          <Wrap>
              <img src="/images/h1.jpg" />
          </Wrap>
          <Wrap>
              <img src="/images/h5.jpg" />
          </Wrap>
          <Wrap>
              <img src="/images/h6.jpg" />
          </Wrap>
          <Wrap>
              <img src="/images/h7.jpg" />
          </Wrap>
          <Wrap>
              <img src="images/land.jpg" />
          </Wrap>
          <br/>
          <Wrap>
              <img src="images/lands.jpg" />
          </Wrap>
      </Container></>
  )
}

export default Hotels
const Container=styled.div`
cursor:pointer;
display:flex;
grid-gap:25px;
grid-templete-columns:repeat(4, minmax(0,1fr));

`

const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border:3px rgba(249,249, 249, 0.1);
bax-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    border-radius:10px;
    object-fit:cover;
}
&:hover{
    box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);

}

`
