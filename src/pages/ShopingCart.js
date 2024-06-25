import React, {useContext, useEffect, useState} from 'react';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Kasse from '../Components/Kasse';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ShopingCartContext from '../Context/ShoppingCartContext';


const ShopingCart = () => {
  const { shopingCartList, total, handdleRemoveItem, editColor, editAmount } = useContext(ShopingCartContext);
  const [steuer, setSteuer] = useState(0.00);
  const [toPay, setToPay] = useState(0.00);
  const imageBaseUrl = "https://bellaitaliaa.com/api/images/";
  const [kasse, setKasse] = useState(false);
  const [versand, setVersand] = useState (6.25);

  //claculate the total client has to pay if the total of the item list change
  useEffect(() => {
    setSteuer(19/100 * (total));
  }, [total])

  useEffect(() => {
    setToPay(total + steuer + versand)
  }, [steuer, versand])

  //open the screen to make the order
  const handdleKasse = () => {
    if(kasse === false) {
      setKasse(true);
    }
  }

  return (
    <>
      <Menu />

      {kasse &&
        <Kasse closeThis = {setKasse} toPay={toPay} steuer={steuer} netto={total} versand={versand} setVersand={setVersand}/>
      }
      
      <Container>
        <Row className='d-flex justify-content-between align-items-center bg-dark p-2'>
          <Col>
            <span className='paragraphW'>Jetzt 25% sparen mit unsere neue <a href='/Shop'>Angebot.</a></span>
          </Col>
          <Col className='col-auto'>
            <img src={require('../images/icon/closeW.png')} width={18} alt='Close Angebot'/>
          </Col>
        </Row>
        <Row>
          <Col className='col-12 col-lg-6'>
            <span className='titleBigB mb-5'>Warenkorb</span>
            {shopingCartList.map((item) => {
              return (
                <Row key={item.id} className='m-3'>
                  <Col className='col-auto'>
                    <img src={imageBaseUrl + item.image} alt='Bella Italia Produkt' height={100}/>
                  </Col>
                  <Col>
                    <div className='d-flex align-items-center justify-content-between'>
                      <span className='titleSmallB'>{item.name}</span>
                      <img onClick={() => handdleRemoveItem(item.id)} src={require('../images/icon/remove.png')} alt='Remove Item Shop' width={25}/>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>Stuck:
                        <input 
                          type='number' 
                          min={1} 
                          placeholder={item.amount} 
                          style={{width:35}} 
                          onChange={(e) => editAmount(item.id, e.target.value)}
                          onBlur={(e) => {
                            const newValue = parseInt(e.target.value, 10);
                            if (newValue >= 1) {
                              editAmount(item.id, newValue);
                            } else {
                              // Reset value to 1 if less than 1 is entered
                              // Note: Direct manipulation of e.target.value here might not visually update the input's displayed value
                              editAmount(item.id, 1); // Call editAmount with 1 to ensure the value is enforced
                            }
                          }}
                        />
                      </span>
                      <span style={{fontWeight: 'bold'}}>{(item.price * item.amount).toFixed(2)}€</span>
                    </div>
                  </Col>
                </Row>
              )
            })
            }
          </Col>
          <Col className='col-12 col-lg-6 p-0'>
            <div className='bg-white p-3'>
              <h1>Gesamt:</h1>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='titleSmallB'>Gesamtpreis:</span>
                <span className='titleSmallB'>{(total).toFixed(2)}€</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='titleSmallB'>Vesandkosten:</span>
                <span className='titleSmallB'>{versand}€</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='titleSmallB'>MwSt.(19%):</span>
                <span className='titleSmallB'>{(Math.round(steuer * 100) / 100).toFixed(2)}€</span>
              </div>
              <hr></hr>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='titleBigB'>Gesamt:</span>
                <span className='titleBigB'>{(Math.round(toPay * 100) / 100).toFixed(2)}€</span>
              </div>
              <div className='text-center mt-3'>
                <Button onClick={handdleKasse} className='w-75' disabled={shopingCartList.length === 0}>Kasse</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default ShopingCart
