import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet.js'

import heroImg from '../assets/images/hero.png'

const Home = () => {
  return <Helmet title='Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h5>Easy way to make an order</h5>
              <h1><span>Hungry?</span> Just wait<br />food at  <span>your door</span></h1>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="heo">
              <img src={heroImg} alt="hero-img" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;

