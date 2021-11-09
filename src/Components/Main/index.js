
import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Slide } from '../SlideMain'








export function Main() {




    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                mains {
                    titlewithuloax
                    titleyoureveryday
                    titlewhyride
                    titleuloaxfor
                    titletaxi
                    titlesecureand
                    titlepuscataxi
                    titleourapptoday
                    titleour
                    titlenumberphone
                    titledownload
                    titlecar3
                    titlecar2
                    titlecar1
                    titlebooknow
                    subtitleuloaxfor
                    subtitlesecureand
                    subtitleactthat
                    imgtaxipequeno {
                      url
                    }
                    imgtaxinormal {
                      url
                    }
                    imgsmartphone {
                      url
                    }
                    imgsemaforo {
                      url
                    }
                    imgpontotaxi {
                      url
                    }
                    imgcarteira {
                      url
                    }
                    imgcarrofundoamarelo {
                      url
                    }
                    taxinormalfaixavermelha {
                        url
                      }
                    btnbooknow
                    btnsearch
                }
            }
        }
    `)

    const {
        titlewithuloax,
        titlewhyride,
        titleuloaxfor,
        titletaxi,
        titlesecureand,
        titleourapptoday,
        titleour,
        titledownload,
        titlecar3,
        titlecar2,
        titlecar1,
        titlebooknow,
        subtitleuloaxfor,
        subtitlesecureand,
        subtitleactthat,
        imgtaxipequeno,
        imgsmartphone,
        imgsemaforo,
        imgpontotaxi,
        imgcarteira,
        imgcarrofundoamarelo,


    } = data.alldata.mains[0]





    return (
        <S.Container id='Home'>
            <Slide />
            <S.SectionCardTaxi id='Taxi'>
                <S.ContainerCardTaxi>
                    <S.BoxTextCard>
                        <h2 className="h2branco">{titleour}</h2>
                        <h2 className="h2amarelo">{titletaxi}</h2>
                    </S.BoxTextCard>
                    <S.BoxCardsTaxi>
                        <S.CardTaxi>
                            <div className="CirculoAmarelo"><p>01</p></div>
                            <div className="Boxtext">
                                <h2>{titlecar1}</h2>
                                <p>{subtitleactthat}</p>
                                <div>
                                    <img style={{ width: "100%",  }} src={imgtaxipequeno.url} alt="" />
                                </div>
                            </div>
                        </S.CardTaxi>
                        <S.CardTaxi>
                            <div className="CirculoAmarelo"><p>02</p></div>
                            <div className="Boxtext">
                                <h2>{titlecar2}</h2>
                                <p>{subtitleactthat}</p>
                                <div>
                                    <img style={{ width: "100%" }} src={imgtaxipequeno.url} alt="" />
                                </div>
                            </div>
                        </S.CardTaxi>
                        <S.CardTaxi>
                            <div className="CirculoAmarelo"><p>03</p></div>
                            <div className="Boxtext">
                                <h2>{titlecar3}</h2>
                                <p>{subtitleactthat}</p>
                                <div>
                                    <img style={{ width: "100%" }} src={imgtaxipequeno.url} alt="" />
                                </div>
                            </div>
                        </S.CardTaxi>
                    </S.BoxCardsTaxi>
                </S.ContainerCardTaxi>
            </S.SectionCardTaxi>
            <S.SectionInfoTaxis id='Booking'>
                <S.ContainerinfoTaxis>
                    <S.BigBoxInfoTaxis>
                        <S.BoxTitleCardInfo>
                            <h2>{titlewhyride}</h2>
                            <h2 style={{ color: '#f4db31', marginLeft: '1.100rem' }}>{titlewithuloax}</h2>
                        </S.BoxTitleCardInfo>
                        <S.BoxCardsInfo>
                            <S.CardsInfoTaxis1>
                                <figure>
                                    <S.ImgCard src={imgcarteira.url} alt="" />
                                </figure>
                                <div class="BoxTextinfos1">
                                    <h2>{titleuloaxfor}</h2>
                                    <p>{subtitleuloaxfor}</p>
                                    <button>{titlebooknow}</button>
                                </div>
                            </S.CardsInfoTaxis1>
                            <S.CardsInfoTaxis2>
                                <figure>
                                    <S.ImgCard src={imgpontotaxi.url} alt="" />
                                </figure>
                                <div class="BoxTextinfos2">
                                    <h2>{titlesecureand}</h2>
                                    <p>{subtitlesecureand}</p>
                                    <button>{titlebooknow}</button>
                                </div>
                            </S.CardsInfoTaxis2>
                            <S.CardsInfoTaxis1>
                                <figure>
                                    <S.ImgCard src={imgsemaforo.url} alt="" />
                                </figure>
                                <div class="BoxTextinfos1">
                                    <h2>{titleuloaxfor}</h2>
                                    <p>{subtitleuloaxfor}</p>
                                    <button>{titlebooknow}</button>
                                </div>
                            </S.CardsInfoTaxis1>
                            <S.CardsInfoTaxis2>
                                <figure>
                                    <S.ImgCard src={imgsemaforo.url} alt="" />
                                </figure>
                                <div className="BoxTextinfos2">
                                    <h2>{titlesecureand}</h2>
                                    <p>{subtitlesecureand}</p>
                                    <button>{titlebooknow}</button>
                                </div>
                            </S.CardsInfoTaxis2>
                        </S.BoxCardsInfo>
                    </S.BigBoxInfoTaxis>
                </S.ContainerinfoTaxis>
            </S.SectionInfoTaxis>
            <S.SectionPhone>
                <S.ContainerImG back={imgcarrofundoamarelo.url}>
                    <div className="BoxText">
                        <div>
                            <span className="TextBlack">{titledownload}</span>
                            <span className="TextWhite">{titleourapptoday}</span>
                        </div>
                    </div>
                    <div calssName="BoxPhone">
                        <img style={{ width: '100%' }} src={imgsmartphone.url} alt="imagem de um smarth phone" />
                    </div>
                </S.ContainerImG>
            </S.SectionPhone>
        </S.Container>
    )
}