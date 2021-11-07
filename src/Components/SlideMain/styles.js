import styled from "styled-components"


export const Container = styled.section`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color: #1a1a1a;
    color:#fff;
`
export const SubContainer = styled.div`
   display:flex;
    height:48vh;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    overflow:hidden;
`

export const TitleInput = styled.h2`
    font-size:28px;
    position:relative;
    bottom:55vh;
    left:50vw;
`


export const TitleContainer = styled.div`
    background-color:#FFD700;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:justify;
    padding:2vw;
    font-size:2vw;
    width:29vw;
    height:20vh;
    position:relative;
    left:8vw;
    p{
        color:#000;
        padding-bottom:2vh;
    }
  
`
export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;    
    background-color:#fff;
    position:relative;
   
    bottom:25vh;
   
    width:45vw;
    height:45vh;
   button{
       color:#fefefe;
       background-color: #353433;
       float:right;
       font-size: 18px;
       border-radius: 10px;
       padding: 12px 0px;
       width: 25%;
       cursor:pointer;
       text-align:center;
       outline:none;
       text-decoration:none;
       border:none;
       transition: 1s ease-in-out
   }
`

export const Taximg = styled.img`
    width:40vw;
    height:auto;
    position:relative;
    top:45vh;
    right:45vw;
`

export const InputBox = styled.input`
    width:40vw;
    height:5vh;
    border:none;
&::placeholder{
        color:#000;
        font-weight:400;
        background-color:#D3D3D3;
        padding:1vw;
        opacity: 0.9;
    }
`