
import styles from '../css/Home.module.css';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <>
      <Menu />

      <Container fluid className={`${styles.heroSection}`}>
        <Row className='h-100'>
          <Col className='col-12 d-flex justify-content-center justify-content-md-end'>
            <div className={`${styles.myCard} d-flex flex-column justify-content-between align-items-center m-2`}>
              <span className='titleBigW'>BELLA ITALIA</span>
              <img src={require('../images/home/flag.jpg')} alt="Flag Italia" width={200}/>
              <p className='paragraphB text-center'>
                Wir freuen uns, Sie in unserem einzigartigen Laden begrüßen zu dürfen, 
                der sich ganz der italienischen Küche verschrieben hat. Bei uns finden Sie eine 
                große Auswahl an hochwertigen Produkten und Zutaten, die Ihre Küche in eine kleine 
                italienische Oase verwandeln werden.
              </p>
              <Button variant='outline-light'>Jetzt kaufen</Button>
            </div>
          </Col>
          
          <Col className='col-12 d-flex justify-content-center justify-content-md-end'>
            <img src={require('../images/logo.png')} alt="Bella Italia Logo" className={styles.bigLogo}/>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className='text-center'>
          <span className='titleBigB'>Das sind wir!</span>
          <hr />
        </Row>
        <Row className='gap-2'>
          <Col className='text-center'>
            <img src={require('../images/home/galery/2.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/3.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/4.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/5.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/6.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/7.webp')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
        </Row>
      </Container>

      <Container fluid className='mt-5'>
        <Row className={styles.infoSection}>
          <Col className=' col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='px-5 text-center'>
              <span className='titleBigW'>Das sind wir!</span>
              <p className='paragraphW'>
                Unsere Leidenschaft für die italienische Küche spiegelt sich in unserem Sortiment wider, das von handgefertigten Kochgeschirr 
                und Töpfen bis hin zu authentischen Gewürzen und Ölen reicht. Wir möchten Ihnen helfen, Ihr italienisches Kocherlebnis zu 
                optimieren und Ihnen dabei helfen, die Aromen und Düfte Italiens in Ihre Küche zu bringen.
              </p>
            </div>
          </Col>
          <Col className='col-12 col-lg-6 p-0 h-100'>
            <img className={styles.infoImg1} src={require('../images/home/orangePresser.webp')} alt='Orange Presser Bella Italia'/>
          </Col>
        </Row>

        <Row className={styles.infoSection}>
          <Col className='col-12 col-lg-6 p-0 h-100'>
            <img className={styles.infoImg2} src={require('../images/home/plateImg.webp')} alt='Orange Presser Bella Italia'/>
          </Col>
          <Col className='col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='px-5 text-center'>
              <span className='titleBigW'>Das sind wir!</span>
              <p className='paragraphW'>
                Unser freundliches und kompetentes Team steht Ihnen gerne zur Seite und berät Sie bei allen Fragen rund um die italienische Küche. 
                Besuchen Sie uns und entdecken Sie die wunderbare Welt der italienischen Küche!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
