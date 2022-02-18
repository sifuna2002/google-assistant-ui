import React from 'react'
import styled from 'styled-components'

function Snapshot() {
  return (
        <Container>
            <p>Welcome to Snapshot</p>
            <Left>
                <h1>Get a Snapshot of What's ahead for you</h1>
                <h5>See all the important things you need to get done in one place, add more, and see suggested next actions to accomplish them</h5>
                <a href="/#">Got it</a>
            </Left>
            <Right>
                
                <img src="/g.png" />
            </Right>
        </Container>
  )
}

export default Snapshot
const Container =styled.div`
    background: #fff;
    min-height:400px;
    position:relative;
    border-radius:20px;
    h1{
        font-weight:200;
     
    }
    h5{
        font-weight:100;
    }
    p{
        position:absolute;
        top:0;
        left:0;
        padding:20px;
    }
    a{
        text-decoration: none;
        color:blue;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding:20px;
`
const Left =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width:60%;
    //position: absolute;
    left: 0;
    margin-left:20px;
    a{
        position: absolute;
        left: 0;
        padding: 40px;
        bottom: 0;
    }
`
const Right =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width:40%;
    //position: absolute;
    right: 0;
    margin-right: 20px;
    img{
        height: 150px;
        border-radius:100px;
    }
    
`