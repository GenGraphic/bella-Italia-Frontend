import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Instructions from '../Components/Instructions';

import styles from '../css/Shop.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ShopContext from '../Context/ShopContext';
import ShopingCartContext from '../Context/ShoppingCartContext';

const Shop = () => {
  const navigator = useNavigate();

  const { shopItemsList, offersList } = useContext(ShopContext);
  const { shopingCartList, handdleNewItem } = useContext(ShopingCartContext);

  const [instructions, setInstructions] = useState(false);

  //data for the instructions screen
  const [videoSrc, setVideoSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [galery, setGalery] = useState([]);
  const [price, setPrice] = useState('');

  const handdleInstructionsScreen = (videoSrc, title, description, galery, price) => {
    if(!instructions) {
      setVideoSrc(videoSrc);
      setTitle(title);
      setDescription(description);
      setGalery(galery);
      setPrice(price);
      setInstructions(true)
    }
    else {
      setInstructions(false)
    }
  }

  useEffect(() => {
    getShopItems();
  }, [])

  const getShopItems = () => {
    axios.get('http://localhost/api_bella_italia/').then(function(response) {
      console.log(response.data);
    })
  }

  return (
    <div>
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
        />
      }
      

      <Container className='bg-light border-top py-1'>
        <Row className='h-100'>
          <Col className='text-end'>
            <Button onClick={() => navigator("/Einkaufswagen")}>Einkaufswagen</Button>
          </Col>
          <Col className='col-auto d-flex align-items-center position-relative'>
            <img src={require('../images/icon/basket.png')} alt='Bella Italia einkaufswagen' width={30} />
            <p className={`${styles.itemsCounter} position-absolute top-0 start-50 translate-middle`}>{shopingCartList.length}</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {shopItemsList.map((item) =>{
            return (
              <Col key={item.id} className='d-flex flex-column justify-content-between align-items-center mx-5'>
                <div className={styles.itemsImgBkg}>
                  <img 
                    onClick={() => handdleInstructionsScreen(item.video, item.name, item.description,item.galery, item.price)} 
                    src={require('../images/icon/info.png')} 
                    width={35} 
                    className='position-absolute start-100 top-0' alt='Bella Italia Info'/>
                  <img width={150} src={item.image} alt='Bella Italia Produkte'/>
                </div>
                <span className='titleSmallB mb-2'>{item.name}</span>
                <p className='text-center paragraphB'>
                  {item.description}
                </p>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                  <span className='titleSmallB'>{item.price}€</span>
                  <Button onClick={() => handdleNewItem(item.name, item.price, item.image, 'none')}>Kaufen</Button>
                </div>

              </Col>
            )
          })

          }
        </Row>
      </Container>

      <Container fluid className='my-5'>
        <Row className={styles.offerBanner}> 
          <div className={styles.bannerCard}>
            <span className='titleBigB'>Geniesen Sie unsere Angebote. </span>
            <p className='paragraphB'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac suscipit sem. 
              Sed fringilla porttitor lacinia. Maecenas sed dignissim odio.
            </p>
          </div>
        </Row>
      </Container>

      <Container className='mb-5'>
        {offersList.map((item) => {
          return (
            <div key={item.id}>
            <Row className={styles.offerRow}>
              <Col className='d-flex flex-column justify-content-center align-items-center mx-5'>
                <div className={styles.itemsImgBkg}>
                  <img alt='Bella Italia Angebot' src={item.contains[0].image} width={150}/>
                </div>
                <span className='titleSmallW'>{item.contains[0].name}</span>
              </Col>
              <Col className='col-auto d-flex justify-content-center align-items-center'>
                <img src={require('../images/icon/plus.png')} alt='Plus Bella Italia' width={50}/>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center mx-5'>
                <div className={styles.itemsImgBkg}>
                  <img alt='Bella Italia Angebot' src={item.contains[1].image} width={150}/>
                </div>
                <span className='titleSmallW'>{item.contains[1].name}</span>
              </Col>
              <Col className='col-auto d-flex justify-content-center align-items-center'>
                <img src={require('../images/icon/plus.png')} alt='Plus Bella Italia' width={50}/>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center mx-5'>
                <div className={styles.itemsImgBkg}>
                  <img alt='Bella Italia Angebot' src={item.contains[2].image} width={150}/>
                </div>
                <span className='titleSmallW'>{item.contains[2].name}</span>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col className='text-end my-auto'>
                <span className='titleSmallB'>NUR: {item.price}€</span>
              </Col>
              <Col>
                <Button onClick={() => handdleNewItem(item.name, item.price, item.image, 'none')}>Kaufen</Button>
              </Col>
            </Row>
            </div>
          )
        })

        }
      </Container>


      <Footer />
    </div>
  )
}

export default Shop
