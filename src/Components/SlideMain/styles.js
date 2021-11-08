import styled from "styled-components"

export const Scontainer = styled.section`
    background-color:#1a1a1a

`

export const Container = styled.div`
    background-color: #1a1a1a;
    width:100%;
    color:#fff;
`
export const SubContainer = styled.div`
   display:flex;
    height:48vh;
    width:50vw;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    
`

export const TitleInput = styled.h2`
    font-size:28px;
    position:relative;
    bottom:35vh;
    left:48vw;
`


export const TitleContainer = styled.div`
    background-color:#FFD700;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding:2vw;
    width:30vw;
    height:20vh;


    p{
        color:#000;
        
        font-size:2.5vw;
        margin-top:2vh;

    }

    h2{
        font-size:3.4vw;
        font-weight:100;
    }
    
    figure{
        display:flex;
        align-items:flex-end;
        
  }
  
`
export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;    
    background-color:#fff;
    position:relative;
    left:48vw;
    bottom:28vh; 
    width:45vw;
    height:45vh;

`
export const BtnInput = styled.button`
        color:#fefefe;
       background-color: #353433;
       float:right;
       margin-left:28vw;
       font-size: 18px;
       border-radius: 10px;
       padding: 12px 0px;
       width: 25%;
       cursor:pointer;
       text-align:center;
       outline:none;
       text-decoration:none;
       border:none;
       transition: 1s ease-in-out;
       &:hover{
            background-color:#FFD700;
            color:#353433;
       }
`

export const TitleBox = styled.h2`
     color:#353433;
     letter-spacing:1px;
     font-size:23pt;
`

export const Taximg = styled.img`
     width:40vw;
     margin-top:13vh; 
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