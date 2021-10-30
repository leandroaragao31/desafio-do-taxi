import styled from 'styled-components'


export const Container =styled.div`
    width: 100%;
    padding-top: 9vh;

`

export const SectionCardTaxi = styled.section`
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

export const SectionInfoTaxis =styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerinfoTaxis =styled.div`
    width: 73%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const BoxTitleCardInfo =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #2b3436;
    font-family: 'Roboto', sans-serif;
    font-weight:100;
    margin: 4rem 0 4rem 0;
    position: relative;
    text-transform: capitalize;

    &:before {
        content: '';
        position: absolute;
        background-color: #2b3436;
        width: 50%;
        height: 1px;
        top: 8.500rem;
    }

    
`


export const BigBoxInfoTaxis =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const BoxCardsInfo =styled.div`

`

export const CardsInfoTaxis1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .BoxTextinfos1{
        margin-left: 3.500rem;

        h2:first-letter{
            font-size: 30px;
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            text-transform: uppercase;
        }

        h2{
            font-size: 24px;
            font-family: 'Roboto', sans-serif; 
            font-weight: 100;
        }

        p{
            width: 100%;
            font-size: 16px;
            font-family: 'Roboto', sans-serif; 
            font-weight: 100;
           
        }

        button{
            border: transparent;
            width: 20%;
            float: left;
            font-size: 18px;
            color: #fefefe;
            background-color: #f8ca11;
            text-align: center;
            padding: 10px 0px;
            margin-top: 30px;
            transition: all .3s ease-in-out;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                background-color: #000
            }
        }

    }
`

export const CardsInfoTaxis2 =styled.div`

    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    .BoxTextinfos2{
        margin-right: 3.500rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;


        h2:first-letter{
            font-size: 30px;
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            text-transform: uppercase;

        }

        h2{
            font-size: 24px;
            font-family: 'Roboto', sans-serif; 
            font-weight: 100;
        }

        p{
            
            
            width: 100%;
            font-size: 16px;
            font-family: 'Roboto', sans-serif; 
            font-weight: 100;
           
        }

        
        button{
            border: transparent;
            width: 20%;
            float: left;
            font-size: 18px;
            color: #fefefe;
            background-color: #f8ca11;
            text-align: center;
            padding: 10px 0px;
            margin-top: 30px;
            transition: all .3s ease-in-out;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                background-color: #000
            }
        }
    }


`