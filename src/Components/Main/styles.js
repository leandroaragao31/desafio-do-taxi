import styled from 'styled-components'

export const Container =styled.div`
    width: 100%;
    padding-top: 9vh;

`

export const SectionCardTaxi = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161c1e;
`

export const ContainerCardTaxi = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding:  2rem 0 4rem 0;
`

export const BoxTextCard =styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 2rem 0 6rem 0;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    font-size: 2rem;
    

    .h2branco{
        color: #fff;
        margin-right: 1rem;
    }

    .h2amarelo{
        color: #f4db31;
    }


    
`

export const BoxCardsTaxi = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

`

export const CardTaxi = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    font-family: 'Nunito Sans', sans-serif;


    


    .CirculoAmarelo{
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8ca11;
        width: 70px;
        height: 70px;
        border-radius: 50px;
        position: relative;
        bottom: 35px;

    }

    .Boxtext{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        h2{
            font-size: 1.600rem;
            text-transform: uppercase;
        }

        p{
            width: 80%;
            text-align: center;
            font-weight: lighter;
            font-size: 1.200rem;
        }

        div{
            width: 100%;
        }
    }

`