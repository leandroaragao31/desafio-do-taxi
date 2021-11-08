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
                    titlepuscataxi
                    titleyoureveryday
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        autoplay: true,
        adaptiveWidth: true,
    };
    return (
        <S.Scontainer>
            <Helmet>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>
            <Slider style={{ width: '98%' }} {...settings}>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer >
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>

                            <figure>
                                <S.Taximg src={imgtaxinormal.url} alt="" />
                            </figure>
                        </S.TitleContainer>
                    </S.SubContainer>
                    <S.SubContainer>
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnInput>SEARCH</S.BtnInput>
                        </S.InputContainer>
                    </S.SubContainer>
                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer >
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>
                            <figure>
                                <S.Taximg src={taxinormalfaixavermelha.url} alt="" />
                            </figure>
                        </S.TitleContainer>
                    </S.SubContainer>
                    <S.SubContainer>
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnInput>SEARCH</S.BtnInput>
                        </S.InputContainer>
                    </S.SubContainer>
                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer >
                            <h2>{titlebooknow}</h2>
                            <p>{titlenumberphone}</p>
                            <figure>
                                <S.Taximg src={imgtaxinormal.url} alt="" />
                            </figure>
                        </S.TitleContainer>
                    </S.SubContainer>
                    <S.SubContainer>
                        <S.TitleInput>{titlepuscataxi}</S.TitleInput>
                        <S.InputContainer>
                            <S.TitleBox>{titleyoureveryday}</S.TitleBox>
                            <S.InputBox type="text" placeholder="PICKUP" />
                            <S.InputBox type="text" placeholder="DROP" />
                            <S.InputBox type="text" placeholder="WHEN" />
                            <S.BtnInput>SEARCH</S.BtnInput>
                        </S.InputContainer>
                    </S.SubContainer>
                </S.Container>
            </Slider>
        </S.Scontainer>
    )
}