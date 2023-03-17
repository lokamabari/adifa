import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet.js'
import Category from '../components/UI/category/Category.jsx';

import '../styles/hero-section.css'
import '../styles/home.css'

import heroImg from '../assets/images/hero.png'
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

const Home = () => {


  const fetaureData = [
    {
      title:'Quick Delivery',
      imgUrl: featureImg01,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, accusantium?'
    },
    {
      title:'Super Dine in',
      imgUrl: featureImg02,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, accusantium?'
    },
    {
      title:'Easy Pick Up',
      imgUrl: featureImg03,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, accusantium?'
    },
  ]
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
            <div className='hero__service d-flex align-items-center gap-5 mt-5'>
              <p className=' d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span> No shipping charge</p>

              <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-shield-check-line"></i></span> 100% secure checkoout</p>
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

    <section className='pt-0'>
      <Category />
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className=' text-center'>
            <h5 className='feature__subtitle mb-4'>What we serve</h5>
            <h2 className='feature__title'>Just sit back at home</h2>
            <h2 className='feature__title'>we will <span>take care</span></h2>

            <p className=' mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, impedit?</p>
            <p className=' feature__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, accusamus.</p>
          </Col>
          {
            fetaureData.map((item,index)=>(
              <Col lg='4' md='4' key={index} className=' mt-5' >
                <div className="feature__item text-center px-5 py-3" >
                  <img src={item.imgUrl} alt="feature-img" className=' w-25 mb-3' />
                  <h5 className=' fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;

