import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import LogoSvg from '../../assets/images/logo.svg'
import LandingSvg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections')
      .then(({ data }) => {
        setTotalConnections(data.total)
      })
      .catch(console.log)
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoSvg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={LandingSvg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
