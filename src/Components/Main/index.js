import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                mains {
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
                    btnbooknow
                    btnsearch
                }
            }
        }
    `)

    const {

        titleyoureveryday,
        titlewhyride,
        titleuloaxfor,
        titletaxi,
        titlesecureand,
        titlepuscataxi,
        titleourapptoday,
        titleour,
        titlenumberphone,
        titledownload,
        titlecar3,
        titlecar2,
        titlecar1,
        titlebooknow,
        subtitleuloaxfor,
        subtitlesecureand,
        subtitleactthat,
        btnbooknow,
        btnsearch,
        imgtaxipequeno,
        imgtaxinormal,
        imgsmartphone,
        imgsemaforo,
        imgpontotaxi,
        imgcarteira,
        imgcarrofundoamarelo,


    } = data.alldata.mains[0]


    return (
        <S.Container>
            <S.SectionCardTaxi>
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
                                    <img style={{width:"100%"}} src={imgtaxipequeno.url} alt=""/>
                                </div>
                            </div>
                        </S.CardTaxi>
                        <S.CardTaxi>
                            <div className="CirculoAmarelo"><p>02</p></div>
                            <div className="Boxtext">
                                <h2>{titlecar2}</h2>
                                <p>{subtitleactthat}</p>
                                <div>
                                    <img style={{width:"100%"}} src={imgtaxipequeno.url} alt=""/>
                                </div>
                            </div>
                        </S.CardTaxi>
                        <S.CardTaxi>
                            <div className="CirculoAmarelo"><p>03</p></div>
                            <div className="Boxtext">
                                <h2>{titlecar3}</h2>
                                <p>{subtitleactthat}</p>
                                <div>
                                    <img style={{width:"100%"}} src={imgtaxipequeno.url} alt=""/>
                                </div>
                            </div>
                        </S.CardTaxi>
                    </S.BoxCardsTaxi>
                </S.ContainerCardTaxi>
            </S.SectionCardTaxi>
        </S.Container>
    )
}
