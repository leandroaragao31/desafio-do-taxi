import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'
import Slider from "react-slick";
import { Helmet } from 'react-helmet';


export function Slide() {

    const data = useStaticQuery(graphql`
        query{
            alldata{
                mains{
                    titlebooknow
                    titlenumberphone
                    titleyoureveryday
                    titlepuscataxi
                    taxinormalfaixavermelha{
                        url
                    }
                    imgtaxinormal{
                        url
                    }
                }
            }
        }
    
    `)

    const { taxinormalfaixavermelha, imgtaxinormal, titlepuscataxi,
        titlenumberphone, titlebooknow, titleyoureveryday } = data.alldata.mains[0]

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        
    };
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>
            <Slider  {...setting}>
                <S.Container>

                    <S.SubContainer>
                        <S.TitleContainer>
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>
                        </S.TitleContainer>
                        <figure>
                            <S.Taximg src={imgtaxinormal.url} alt="" />
                        </figure >
                    </S.SubContainer>
                         
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnSearch>SEARCH</S.BtnSearch>
                        </S.InputContainer> 
                        
                    
                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>
                        </S.TitleContainer>

                        <figure>
                            <S.Taximg src={taxinormalfaixavermelha.url} alt="" />
                        </figure >
                    </S.SubContainer>
                     
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnSearch>SEARCH</S.BtnSearch>
                        </S.InputContainer>

                    

                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>
                        </S.TitleContainer>

                        <figure>
                            <S.Taximg src={imgtaxinormal.url} alt="" />
                        </figure >
                    </S.SubContainer>
                     
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnSearch>SEARCH</S.BtnSearch>
                        </S.InputContainer>

                    

                </S.Container>
            </Slider>
        </>
    )
}
