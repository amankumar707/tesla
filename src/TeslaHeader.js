import React from "react"
import styled from "styled-components"
export default function TeslaHeader()
{
    return(
        <>
      <MainMenu>
        <Logo>
            <img src="image/logo.svg" width={100} height={100}></img>
        </Logo>
        <CenterMenu>
            <ul>
            <li><a href="">Model S</a></li>
            <li><a href="">Model 3</a></li>
            <li><a href="">Model X</a></li>
            <li><a href="">Model Y</a></li>
            <li><a href="">Solar Roof</a></li>
            <li><a href="">Solar Panels</a></li>
            </ul>
        </CenterMenu>
        <RightMenu>
            <ul>
               <li><a href="">Shop</a></li>
               <li><a href="">Account</a></li>
               <li><a href="">Menu</a></li>
            </ul> 
        </RightMenu>
      </MainMenu>
        </>
    )
}
// backtic Symbol=``
const Logo=styled.header`

`

const CenterMenu=styled.header`

`

const RightMenu=styled.header`
 

`

const MainMenu=styled.header`
display:flex;

align-items:center;
height:70px;
padding:0 5rem;
position:fixed;
ul {
    display:flex;
    list-style:none;
    
}


ul li a{
    text-decoration:none;
    padding:0 2.1rem;

}
`

  



