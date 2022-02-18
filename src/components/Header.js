import React from 'react'

import {IoBulbOutline} from 'react-icons/io5'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
        <h1>Have a great <br />
         afternoon
         <span role="img" aria-label="sheep">😌</span>
         </h1>
         <Left>
            <IoBulbOutline size={50} />
            <div>SD</div>
         </Left>
         
    </Container>
  )
}

export default Header
const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-weight:100;
    }
    
`
const Left =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        background-color:blue;
        height: 50px;
        width:50px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-left: 20px;
    }
`