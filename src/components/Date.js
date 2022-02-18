import React from 'react'
import { FiSettings } from "react-icons/fi";
import styled from 'styled-components'
function Date() {
  return (
    <Container>
        <Left>
        <Blue>
        </Blue>
        <em>TODAY</em> <span>.</span>
        <p>February 18</p>
        </Left>
        <Right>
        <FiSettings />
        </Right>
        
       
    </Container>
  )
}

export default Date
const Container =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:20px;
    flex-direction: row;
    border-radius:5px;
    background-color:transparent;
    em{
        font-weight: bold;
    }

`
const Blue =styled.div`
    height: 20px;
    width: 5px;
    background-color:skyblue;
    border-radius:10px;
    margin-right: 10px;
`

const Left =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    span{
        padding:10px;
        
    }
`
    
const Right =styled.div``