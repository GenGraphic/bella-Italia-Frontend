
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
            <p className='subtitleBB'>Willkommen bei Giovanii – Ihrem Spezialisten für hochwertige Küchenprodukte seit 2005!</p>
            <p className='paragraphTranslucidB'>
              Seit unserer Gründung im Jahr 2005 hat Giovanii mit Leidenschaft und Kreativität einzigartige Küchenprodukte geschaffen. Unsere Produkte sind das Ergebnis eigener Ideen, von Messen in ganz Europa inspiriert. Als Familienunternehmen legen wir Wert auf Qualität und Originalität.
            </p>
            <p>
              Unsere Bilder sind mehr als nur visuelle Darstellungen – sie sind das Ergebnis unserer eigenen Materialien und spiegeln die Liebe zum Detail wider. Giovanii ist stolz darauf, 100% "Made in Italia" zu sein. Seit 2005 bieten wir unsere Produkte europaweit an, sowohl auf Messen als auch online. Entdecken Sie das einzigartige Erlebnis von Giovanii in Ihrer Küche!
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className='my-5'>
        <Row className={styles.bannerCard}>
          {/*<Col className='col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
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
          <Col className='col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
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
          <Col className='col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
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
          <Col className='col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
            <div className={styles.serviceCard}>
              <div className='d-flex flex-column align-items-center'>
                <img src={require('../images/icon/delivery.png')} width={80} alt='Quality Bella Italia'/>
                <span className='titleSmallW'>Komfort</span>
              </div>
              <p className='text-center paragraphB'>
                Bequemer Kaufprozess mit einfachen Bestell-, Versand- und Rückgabeoptionen.
              </p>
            </div>
          </Col>*/}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='my-auto'>
            <p className='subtitleTranslucidB'>Über Bella Italia</p>
            <p className='subtitleBB'>Erleben Sie das Beste aus Italien mit Giovanii – Ihrem zuverlässigen Partner für Küchenprodukte seit 2005!</p>
            <p className='paragraphTranslucidB'>
              Giovanii ist nicht nur eine Marke; es ist eine Leidenschaft, die seit 2005 kontinuierlich wächst. Unser Gründer, ein echter Visionär, brachte seine kreativen Ideen auf Messen in ganz Europa und schuf eine beeindruckende Palette von Küchenartikeln. Als Familienunternehmen haben wir uns der Herstellung hochwertiger Produkte verschrieben.
            </p>
            <p>
              Unsere Bilder erzählen Geschichten, sie sind keine Standardaufnahmen. Jedes Bild repräsentiert unser eigenes Material und den Geist von Giovanii. Mit Stolz können wir behaupten, dass alles zu 100% in Italien hergestellt wird. Seit 2005 bringen wir die italienische Kochkunst in Küchen europaweit – sei es auf Messen oder in unserem Online-Shop. Entdecken Sie die Qualität und Leidenschaft von Giovanii!
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
