import styled, { keyframes } from 'styled-components'


export const Container = styled.div`
    width: 100%;
    padding-top: 71px;
`

export const SectionSlide = styled.section`
    width: 100%;
    height: 35.400rem;
    background-color: #1a1a1a;
    color: #fff;
    
    
`

export const ContainerSectionSlide = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxSlide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .BoxYellow{
        width: 30%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f8ca11;
        position: absolute;
        bottom: 70%;
        left: 21%;
        .TextBOOK{
            font-size:35px;
            text-transform: uppercase;
            font-weight: 100;
            font-family: 'Nunito Sans', sans-serif;
            padding-bottom: 1rem;
        }
        .Number{
            color: #000;
            font-size:40px;
            text-transform: uppercase;
            font-weight: 100;
            font-family: 'Nunito Sans', sans-serif;
        }
    }
    .SlideBox{
        width: 30%;
    }
`

export const BoxInputs = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 25px; 
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 200;
        margin: 2rem 0 2rem 0;
    }
    .BoxSearch{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding-bottom: 2rem;
        
        span{
            color: #000;
            font-size: 30px; 
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 200;
            padding: 20px 6px 6px 6px;
        }
        input{
            background: #e1e1e1;
            border-bottom: 1px solid #fffcf4;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            color: #000;
            width: 90%;
            height: 30px;
            font-size: 20px;
            padding: 6px 6px 6px 20px;
            margin-bottom: 10px;
            border-radius: 5px;
            display: block;
        }
        .BoxButton{
            width: 100%;
            button{
            width: 25%;
            float: right;
            background-color: #353433;
            color: #fefefe;
            text-align: center;
            padding: 17px 0px;
            font-size: 18px;
            border-radius: 10px;
            border: transparent;
            margin-right: 22px;
            transition: all .3s ease-in-out;
            text-transform: uppercase;
            cursor: pointer;
            &:hover{
                background-color: #f8ca11;
                }
            }
        }
        
    }
`

export const SectionCardTaxi = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161c1e;
    margin-top: 6rem;
`

export const ContainerCardTaxi = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding:  2rem 0 4rem 0;
`

export const BoxTextCard = styled.div`
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
    transition:1s ease;
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
    &:hover{
        transform: scale(110%);
        -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, 
        red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, 
        #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    
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

export const SectionInfoTaxis = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerinfoTaxis = styled.div`
    width: 73%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxTitleCardInfo = styled.div`
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
        top: 5.5rem;
    }
    
`


export const BigBoxInfoTaxis = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BoxCardsInfo = styled.div`
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
const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ImgCard = styled.img`
            transition: 1s ease-in-out;
            -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
            box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
            &:hover{
                transform: scale(120%);
                animation: ${rotate} 0.5s linear;

            }
        
`

export const CardsInfoTaxis2 = styled.div`
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

export const SectionPhone = styled.div`
    width: 100%;
    height: 47rem;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerImG = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${prop => prop.back});
    .BoxText{
       
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 76%;
        height: 76%;
        
        div{
            padding-left: 20rem;
            width: 60%;
            display: flex;
            flex-direction: column;
            
            align-items: flex-start;
        .TextBlack{
            font-size: 50px;
            color: #000;
            font-family: 'Roboto', sans-serif; 
            text-transform: uppercase;        
        }
        .TextWhite{
            font-size: 50px;
            color: #fff;
            font-family: 'Roboto', sans-serif; 
            text-transform: uppercase;
        }
    }
    
}
        
    .BoxPhone{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`