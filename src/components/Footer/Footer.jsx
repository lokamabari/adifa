import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png"
import '../../styles/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
          <div className="footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5 className='footer__title'>Tasty Treat</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolor voluptas quasi commodi vero.
            </p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5>Delivery Time</h5>
          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p>Off Day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5>Contact</h5>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Location: <p>Lorem ipsum dolor sit amet.</p></span>

          </ListGroupItem>

          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Phone: (+62) 812 3456 7891</span>

            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: example@gmail.com</span>

            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5>Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Enter your email' />
            <span><i className="ri-send-plane-line"></i></span>
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>&copy; Copyright - 2023 | Made by Polleck. All Right Reserved.</p>
        </Col>
        <Col lg='6' md='6'>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow: </p>
            <span> <Link to=''><i className="ri-facebook-line"></i></Link></span>
            <span> <Link to=''><i className="ri-github-line"></i></Link></span>
            <span> <Link to=''><i className="ri-youtube-line"></i></Link></span>
            <span> <Link to=''><i className="ri-linkedin-line"></i></Link></span>
          </div>
        </Col>
      </Row>

    </Container>
  </footer>
}

export default Footer;