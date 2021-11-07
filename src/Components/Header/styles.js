import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-around;
    background-color:#1a1a1a;
    width:100%;
    height:11vh;
    padding-top:10px;
    padding-bottom:10px;
    float:left;
    position:fixed;
    z-index:99;
    font-family: 'Nunito Sans', sans-serif;
    
`
export const LogoHeader = styled.img`
    width:16vw;
    height:8vh;
    cursor: pointer;
`
export const Menu = styled.nav`
    height:10vh;
    font-size:1.3rem;
    &:nth-child(1){
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        width:45vw;
        list-style:none;
        cursor:pointer;
    }
    
`
export const Link = styled.a`
    text-decoration:none;
    color:#fff;
    text-transform:capitalize;
    transition:0.7s;
    &:hover{
        color:#FFC125;
    }
`