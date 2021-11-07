
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
            <S.Footer_section id='Contact'>
                <S.BoxSocial>
                    <S.BoxAddress>
                        <h2>{titleaddress}</h2>
                        <p>{subtitleloren}</p>
                    </S.BoxAddress>
                    <S.ContainerLinks>
                        <h2>{titlelinks}</h2>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <a href="#Home">{btnhome}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <a href="">{btnabout}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <a href="#Taxi">{btntaxi}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <a href="#Booking">{btnbooking}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgcirclered.url} alt="imagem de um circulo vermelho" />
                            <a href="#Contact">{btncontactus}</a>
                        </S.BoxLinks>
                    </S.ContainerLinks>
                    <S.ContainerLinks>
                        <h2>{titlefollowus}</h2>
                        <S.BoxLinks>
                            <img src={imgfacebook.url} alt="facebook" />
                            <a href="">{btnfacebook}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgtwitter.url} alt="twitter" />
                            <a href="">{btntwitter}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imglinkedin.url} alt="linkedin" />
                            <a href="">{btnlinkedin}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imgyoutube.url} alt="youtube" />
                            <a href="">{btnyoutube}</a>
                        </S.BoxLinks>
                        <S.BoxLinks>
                            <img src={imginstagran.url} alt="instagram" />
                            <a href="">{btninstagran}</a>
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