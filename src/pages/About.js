
import styles from '../css/About.module.css';

import React from 'react';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <>
      <Menu />

      <Container>
        <Row>
          <Col>
            <img src={require('../images/about/vector1.png')} width={400} alt='Bella Italia about'/>
          </Col>
          <Col className='my-auto'>
            <p className='subtitleTranslucidB'>Über Bella Italia</p>
            <p className='subtitleBB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget.</p>
            <p className='paragraphTranslucidB'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem quam. 
              Vestibulum sem lacus, rutrum ut lectus id, condimentum malesuada magna. 
              Maecenas molestie pharetra ipsum, sed interdum risus ornare vel. Ut scelerisque venenatis ante eu tincidunt. 
              Pellentesque fringilla eleifend quam quis auctor. Suspendisse vulputate condimentum fringilla. Donec ac eleifend lacus. 
              Donec rhoncus elementum dolor id auctor. Proin ullamcorper tristique ex, vitae maximus libero. Mauris finibus tellus at suscipit imperdiet. Nam a justo metus.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className='my-5'>
        <Row className={styles.bannerCard}>
          <Col className='d-flex justify-content-center'>
            <div className={styles.serviceCard}>
              <div className='d-flex flex-column align-items-center'>
                <img src={require('../images/icon/quality.png')} width={80} alt='Quality Bella Italia'/>
                <span className='titleSmallW'>Qualitätsprodukte</span>
              </div>
              <p className='text-center paragraphB'>
                Hochwertige Produkte und Dienstleistungen.
              </p>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className={styles.serviceCard}>
              <div className='d-flex flex-column align-items-center'>
                <img src={require('../images/icon/price.png')} width={80} alt='Quality Bella Italia'/>
                <span className='titleSmallW text-center'>Wettbewerbsfähige Preise</span>
              </div>
              <p className='text-center paragraphB'>
                Günstige Preise im Vergleich zur Konkurrenz.
              </p>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className={styles.serviceCard}>
              <div className='d-flex flex-column align-items-center'>
                <img src={require('../images/icon/customer-service.png')} width={80} alt='Quality Bella Italia'/>
                <span className='titleSmallW text-center'>Außergewöhnlicher Kundenservice</span>
              </div>
              <p className='text-center paragraphB'>
                Hervorragender Kundenservice mit personalisierter Betreuung.
              </p>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className={styles.serviceCard}>
              <div className='d-flex flex-column align-items-center'>
                <img src={require('../images/icon/delivery.png')} width={80} alt='Quality Bella Italia'/>
                <span className='titleSmallW'>Komfort</span>
              </div>
              <p className='text-center paragraphB'>
                Bequemer Kaufprozess mit einfachen Bestell-, Versand- und Rückgabeoptionen.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='my-auto'>
            <p className='subtitleTranslucidB'>Über Bella Italia</p>
            <p className='subtitleBB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget.</p>
            <p className='paragraphTranslucidB'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem quam. 
              Vestibulum sem lacus, rutrum ut lectus id, condimentum malesuada magna. 
              Maecenas molestie pharetra ipsum, sed interdum risus ornare vel. Ut scelerisque venenatis ante eu tincidunt. 
              Pellentesque fringilla eleifend quam quis auctor. Suspendisse vulputate condimentum fringilla. Donec ac eleifend lacus. 
              Donec rhoncus elementum dolor id auctor. Proin ullamcorper tristique ex, vitae maximus libero. Mauris finibus tellus at suscipit imperdiet. Nam a justo metus.
            </p>
          </Col>
          <Col className='text-end'>
            <img src={require('../images/about/vector2.png')} width={400} alt='Bella Italia about'/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default About
