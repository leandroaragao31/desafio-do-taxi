import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-around;
    background-color:#1a1a1a;
    width:100%;
    height:9.5vh;
    padding-top:10px;
    padding-bottom:10px;
    float:left;
    position:fixed;
    z-index:99;
`
export const LogoHeader = styled.img`
    width:18vw;
    height:9vh
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