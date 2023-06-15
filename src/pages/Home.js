import React, {useState, useEffect} from 'react';

import { useNavigate } from "react-router-dom";

import styles from '../css/Home.module.css';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Home() {
  const [shopItemsList, setShopItmesList] = useState([]);
  const imageBaseUrl = "https://bellaitaliaa.com/api/images/";
  const navigator = useNavigate();

  useEffect(() => {
    handleGetShopItems();
  },[])

   //fect the items from db
   const handleGetShopItems = () => {
    fetch("https://bellaitaliaa.com//api/get_shopItems.php")
      .then(response => response.json())
      .then(data => {
        setShopItmesList(data);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
    }

  return (
    <>
      <Menu />

      <Container fluid className={styles.heroSection}>
        <Row className='h-50'>
          <Col className='col-12 d-flex flex-column justify-content-between align-items-lg-end align-items-center'>
            <div className={styles.myCard}>
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
        </Row>
        <Row className='h-50 p-3 d-flex justify-content-between align-items-end'>
            {shopItemsList.map((item) => {
              return(
                <Col key={item.item_id} className='d-flex flex-column justify-content-center align-items-center'>
                  <div className={styles.circleItem}>
                    <img src={imageBaseUrl + item.image} className={styles.itemImage}/>
                  </div>
                  <Button onClick={() => navigator('/Shop')} className='mt-1'>Kaufen</Button>
                </Col>
              )
            })
            }
            <Col className='text-center text-xl-end'>
              <img src={require('../images/logo.png')} alt="Logo" width={250}/>
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
