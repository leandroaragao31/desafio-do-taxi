import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'


export function Footer() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                footers {
                    btnabout
                    btnbooking
                    btncontactus
                    btncopyright
                    btnfacebook
                    btnhome
                    btninstagran
                    btnlinkedin
                    btnsubscribe
                    btntaxi
                    btntwitter
                    btnyoutube
                    imgyoutube {
                      url
                    }
                    imgtwitter {
                      url
                    }
                    imglinkedin {
                      url
                    }
                    imginstagran {
                      url
                    }
                    imgfacebook {
                      url
                    }
                    imgcirclered {
                      url
                    }
                    subtitleloren
                    titleaddress
                    titlecopyright
                    titlefollowus
                    titlelinks
                    titlenewsletter
                }
            }
        }
    
    `)



    const {

        btnabout,
        btnbooking,
        btncontactus,
        btncopyright,
        btnfacebook,
        btnhome,
        btninstagran,
        btnlinkedin,
        btnsubscribe,
        btntaxi,
        btntwitter,
        btnyoutube,
        imgyoutube,
        imgtwitter,
        imglinkedin,
        imginstagran,
        imgfacebook,
        imgcirclered,
        subtitleloren,
        titleaddress,
        titlecopyright,
        titlefollowus,
        titlelinks,
        titlenewsletter,


    } = data.alldata.footers[0]


    return (
        <S.Container>
            <S.Footer_section>
                <S.BoxSocial>
                    <S.BoxAddress>
                        <h2>{titleaddress}</h2>
                        <p>{subtitleloren}</p>
                    </S.BoxAddress>
                    <S.ContainerLinks>
                        <h2>{titlelinks}</h2>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <button>{btnhome}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <button>{btnabout}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <button>{btntaxi}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <button>{btnbooking}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <button>{btncontactus}</button>
                        </S.BoxLinks>
                    </S.ContainerLinks>
                    <S.ContainerLinks>
                        <h2>{titlefollowus}</h2>
                        <S.BoxLinks>
                            <img src={imgfacebook.url} alt="facebook" />
                            <button>{btnfacebook}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgtwitter.url} alt="twitter" />
                            <button>{btntwitter}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imglinkedin.url} alt="linkedin" />
                            <button>{btnlinkedin}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgyoutube.url} alt="youtube" />
                            <button>{btnyoutube}</button>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imginstagran.url} alt="instagram" />
                            <button>{btninstagran}</button>
                        </S.BoxLinks>
                    </S.ContainerLinks>
                    <S.BoxNewsletter>
                        <h2>{titlenewsletter}</h2>
                        <input type="email" name="newsletter" placeholder="Enter Your Email" />
                        <button>{btnsubscribe}</button>
                    </S.BoxNewsletter>
                </S.BoxSocial>
                <div className="CopyRight">
                    <h2>{titlecopyright}</h2>
                    <button>{btncopyright}</button>
                </div>
            </S.Footer_section>

        </S.Container>
    )
}
