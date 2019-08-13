import styled from 'styled-components'
import React from 'react'
import { useCookies } from 'react-cookie'
import reactGA from 'react-ga'

const BannerContainer = styled.div`
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0px;
  font-size: 4rem;
  text-align: center;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.8; */
  p {
    margin: 0 3rem;
    color: white;
  }
  button {
    background: #ffd568;
  }
  .buttons {
  }
`

const ConsentBanner = () => {
  const [cookies, setCookie] = useCookies(['consent'])

  if (['accepted', 'declined'].includes(cookies['consent'])) {
    return null
  }

  const consentAcceptedHandler = () => {
    reactGA.initialize('UA-140137818-1')
    setCookie('consent', 'accepted')
  }

  return (
    <BannerContainer>
      <p>
        Hello there! This website uses cookies to analyze traffic data and
        improve your experience.
      </p>
      <div className="buttons">
        <button onClick={consentAcceptedHandler}>Accept</button>
        <button onClick={() => setCookie('consent', 'declined')}>
          Decline
        </button>
      </div>
    </BannerContainer>
  )
}

export default ConsentBanner