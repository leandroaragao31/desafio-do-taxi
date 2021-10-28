import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #2e2e2e;
    color: #ffff;
`

export const Footer_section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 40px;


    .CopyRight{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        color:#000;
        background-color: #fff;
        padding: 2rem 0 2rem 0;
        
        h2{
            font-weight: normal;
        }

        button{
            font-size: 21px;
            background-color: transparent;
            border: none;
            transition:0.7s;
            cursor:pointer;

            &:hover {
                color:#FFC125;
            }
        }
    }
    
`

export const BoxSocial = styled.div`
    width: 90%;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 20px 0 20px 0;
    font-family: 'Roboto', sans-serif;
`

export const BoxAddress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 20%;
    margin: 0 2rem 0 2rem;

    h2{
        font-size: 2rem;
        font-weight: 100;
        text-transform: capitalize;
    }

    p{
        font-size: 18px;
    }

`

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 20%;
    margin: 0 0 0 3rem;

    h2{
        font-size: 2rem;
        font-weight: 100;
        text-transform: capitalize;
    }


`

export const BoxLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;

    img{
        margin: 0.500rem 0 0.100rem 0;
    }
    

    button{
        background-color: transparent;
        border: none;
        color: #FFF;
        font-size: 1rem;
        transition:0.7s;
        cursor:pointer;
        margin: 0.500rem 0 0.100rem 0;

        &:hover {
            color:#FFC125;
        }

    }

`

export const BoxNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 20%;
    margin: 0 0 0 2rem;

    h2{
        width: 100%;
        font-size: 28px;
        color: #ebebeb;
        font-weight: bold;
        padding: 10px 0px;
        font-weight: 100;
        text-transform: capitalize;
    }

    input{
        width: 100%;
        font-size: 12pt;
        color: #eceaea;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
        border: 0px;
        font-family: 'Roboto', sans-serif;
    }

    button{
        width: 60%;
        font-size: 16pt;
        color: #eceaea;
        background-color: #fecf3d;
        padding: 5px 0px;
        border: 0px;
        text-align: center;
        margin-top: 20px;
        font-weight: 600;
        border-radius: 5px;
        cursor:pointer;
    }

    

`