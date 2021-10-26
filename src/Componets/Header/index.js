import React from 'react';
import { graphql,  useStaticQuery } from 'gatsby';
import * as S from './styles'



export  function Header() {

    const data = useStaticQuery(graphql`
        query{
            alldata{
                headers {
                    imglogo {
                      url
                    }
                    btnhome
                    btntaxi
                    btnbooking
                    btncontactus
                  }
            }
        }
    `) 

    const {imglogo, btnhome, btntaxi, btnbooking, btncontactus} = data.alldata.headers[0]

    return (
    <S.Container>
      <S.LogoHeader src={imglogo.url} alt="logo-header" />
      <S.Menu>
          <S.Menu>
              <S.Link href="" alt="">
                  <li>{btnhome}</li>
              </S.Link>
              <S.Link href="" alt="">
                  <li>{btntaxi}</li>
              </S.Link>
              <S.Link href="" alt="">
                  <li>{btnbooking}</li>
              </S.Link>
              <S.Link href="" alt="">
                  <li>{btncontactus}</li>
              </S.Link>
          </S.Menu>
      </S.Menu>
    </S.Container>
  );
}
