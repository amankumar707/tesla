import React from "react"
import styled from "styled-components"
export default function TeslaSection(props)
{
    return(
        <>
        <MainSection bg={props.bgimage}>
        <Car>
            <h1>{props.name}</h1>
            <p>{props.tagline }</p>
        </Car>
    <Button>
         <LButton>{props.lbuttontext}</LButton>
        {props.rbuttontext &&<RButton>{props.rbuttontext}</RButton>} 
    </Button>

    </MainSection>
        </>
    )
}

const MainSection=styled.div`
 background-image:url(image/${props=>props.bg});
 background-repear:no-repeat;
 background-position:center;
 background-size:cover;
 height: 100vh;
`
const Car=styled.div`
padding-top:10vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`

const Button=styled.div`

 text-align:center;
 padding-top:24%;

`
const LButton=styled.a`
     background-color:black;
     color:white;
     height:8px;
     width:200px;
     padding:12px;
     margin:0 1rem;
     border-radius:100px;
     display:inline-block;
     opacity:0.8;
     

`

const RButton=styled.a`
background-color:white;
color:black;
height:8px;
width:200px;
padding:12px;
margin:0 1rem;
border-radius:100px;
display:inline-block;
opacity:0.8;
`