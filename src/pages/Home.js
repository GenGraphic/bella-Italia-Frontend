import React, {useState, useEffect} from 'react';

import { useNavigate } from "react-router-dom";

import styles from '../css/Home.module.css';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Instructions from '../Components/Instructions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Home() {
  const [shopItemsList, setShopItmesList] = useState([]);
  const [instructions, setInstructions] = useState(false);
  const imageBaseUrl = "https://bellaitaliaa.com/api/images/";
  const navigator = useNavigate();
  //data for the instructions screen
  const [videoSrc, setVideoSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [galery, setGalery] = useState([]);
  const [price, setPrice] = useState('');
  const [colors, setColors] = useState([]);

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

  const handdleInstructionsScreen = (videoSrc, title, description, galery, price, colors) => {
    if(!instructions) {
      setVideoSrc(videoSrc);
      setTitle(title);
      setDescription(description);
      setGalery(galery);
      setPrice(price);
      setInstructions(true)
      setColors(colors.split(', ')); //convert the color string from db into array
    }
    else {
      setInstructions(false)
    }
  }

  return (
    <>
      <Menu />
      {instructions &&
        <Instructions 
          instructions={instructions}
          setInstructions={setInstructions}
          videoSrc={videoSrc}
          title={title}
          description={description}
          galery={galery}
          price={price}
          colors={colors}
        />
      }

      <Container fluid className={styles.heroSection}>
        <Row className=''>
          <h1 className='text-center my-3'>Unsere Produkte</h1>
          <Col className='d-flex flex-row flex-wrap'>
            {shopItemsList.map((item) => {
                return(
                  <Col key={item.item_id} className='col-12 col-xl-6 mb-5 mb-xl-0 d-flex flex-column justify-content-center align-items-center'>
                    <div className={styles.circleItem} onClick={() => handdleInstructionsScreen(item.video, item.name, item.description,item.galery, item.price, item.colors)}  >
                      <img src={imageBaseUrl + item.image} className={styles.itemImage} alt="Bella Italia"/>

                      <div className={styles.infoBtn}>
                        <img src={require('../images/icon/play.png')} className={styles.infoBtnIcon} alt='Play'/>
                        <p className={styles.infoBtnText}>Info & Videos</p>
                      </div>

                      <div className={styles.buyBtn} onClick={() => navigator('/Shop')}>
                        <img src={require('../images/icon/cart.png')} alt='Kaufen' className={styles.buyBtnIcon}/>
                      </div>

                      <span className='text-center text-bold'>{item.name}</span>

                      <div className={styles.priceCont}>
                        <span className={styles.priceText}>{item.price}€</span>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Col>
          <Col className='col-12 col-md-auto d-flex flex-column justify-content-between align-items-lg-end align-items-center'>
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
            
            <img src={require('../images/logo.png')} alt="Logo" width={250}/>
          </Col>
        </Row>
      </Container>

      <Container fluid className='my-2'>
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
      <Container fluid className='my-2'>
        <Row className='text-center'>
          <span className='titleBigB'>Das sind unsere Produkte!</span>
          <hr />
        </Row>
        <Row className='gap-2'>
          <Col className='text-center'>
            <img src={require('../images/home/galery/8.jpeg')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/9.jpeg')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/10.jpeg')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/11.jpeg')} alt='Bella Italia Stands' className={styles.galeryImg}/>
          </Col>
          <Col className='text-center'>
            <img src={require('../images/home/galery/12.jpeg')} alt='Bella Italia Stands' className={styles.galeryImg}/>
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
