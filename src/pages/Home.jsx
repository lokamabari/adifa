import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet.js'

import '../styles/hero-section.css'

import heroImg from '../assets/images/hero.png'

const Home = () => {
  return <Helmet title='Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h5 className=' mb-3'>Easy way to make an order</h5>
              <h1 className=' mb-4 hero__title' ><span>HUNGRY?</span> Just wait<br />food at  <span>your door</span></h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam quidem nobis distinctio, libero vitae minima a quisquam veritatis?</p>

            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
              <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i className="ri-arrow-right-s-line"></i></button>

              <button className='all__foods-btn' ><Link to='/foods' >See all foods</Link></button>
            </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;

