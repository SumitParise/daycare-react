import React from 'react';
import { Carousel} from 'react-bootstrap';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import '../LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/daycare2.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/daycare1.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/daycare3.jpg"}

            alt="Third slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
