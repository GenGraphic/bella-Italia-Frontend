import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Instructions from '../Components/Instructions';

import styles from '../css/Shop.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ShopingCartContext from '../Context/ShoppingCartContext';

const Shop = () => {
  const navigator = useNavigate();
  const [shopItemsList, setShopItmesList] = useState([]);
  const { shopingCartList, handdleNewItem } = useContext(ShopingCartContext);
  const [instructions, setInstructions] = useState(false);
  const imageBaseUrl = "https://bellaitaliaa.com/api/images/";

  useEffect(() => {
    handleGetShopItems()
  }, [])

  //data for the instructions screen
  const [videoSrc, setVideoSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [galery, setGalery] = useState([]);
  const [price, setPrice] = useState('');
  const [colors, setColors] = useState([]);


  //fetch the items from db
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
          colors={colors}
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
              <Col key={item.item_id} className='d-flex flex-column justify-content-between align-items-center mx-5'>
                <div className={styles.itemsImgBkg}>
                  <img width={150} src={imageBaseUrl + item.image} alt='Bella Italia Produkte'/>
                </div>
                <span className='titleSmallB mb-2'>{item.name}</span>
                <p className='text-center paragraphB'>
                  {item.description}
                </p>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                  <Button 
                    variant="success"
                    onClick={() => handdleInstructionsScreen(item.video, item.name, item.description,item.galery, item.price, item.colors)} 
                    width={35} 
                    alt='Bella Italia Info'>
                    Videos
                  </Button>
                  <div className='d-flex flex-column align-items-center'>
                    {item.soldOut === "1" &&
                      <span style={{color: 'red'}}>Ausverfauft</span>
                    }
                    <Button disabled={item.soldOut === "1"} onClick={() => handdleNewItem(item.item_id, item.name, item.price, item.image, 'none', item.versand)}>Kaufen für {item.price}€</Button>
                  </div>
                </div>
              </Col>
            )
          })

        }
        </Row>
      </Container>

      <Container fluid className='my-5'>
        <Row className={styles.offerBanner}> 
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Shop
