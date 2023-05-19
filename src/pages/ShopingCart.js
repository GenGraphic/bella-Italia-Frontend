import React, {useContext, useEffect, useState} from 'react';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Kasse from '../Components/Kasse';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import ShopingCartContext from '../Context/ShoppingCartContext';


const ShopingCart = () => {
  const { shopingCartList, total, handdleRemoveItem } = useContext(ShopingCartContext);
  const [steuer, setSteuer] = useState(0.00);
  const [toPay, setToPay] = useState(0.00);

  const [kasse, setKasse] = useState(false);

  //claculate the total client has to pay if the total of the item list change
  useEffect(() => {
    setSteuer(19/100 * total);
  }, [total])
  useEffect(() => {
  setToPay(total + steuer + 5)
  }, [steuer])

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
          <Kasse closeThis = {setKasse} toPay={toPay}/>
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
            <Col>
              <span className='titleBigB mb-5'>Warenkorb</span>
              {shopingCartList.map((item) => {
                return (
                  <Row key={item.id} className='m-3'>
                    <Col className='col-auto'>
                      <img src={item.image} alt='Bella Italia Produkt' height={100}/>
                    </Col>
                    <Col>
                      <div className='d-flex align-items-center justify-content-between'>
                        <span className='titleSmallB'>{item.name}</span>
                        <img onClick={() => handdleRemoveItem(item.id)} src={require('../images/icon/remove.png')} alt='Remove Item Shop' width={25}/>
                      </div>
                      
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sollicitudin libero, condimentum pharetra lectus.
                      </p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <span>Stuck:
                          <input placeholder={item.amount} style={{width:35}}/>
                        </span>
                        <span>Farbe: 
                          <select>
                            <option value="none">None</option>
                            <option value="green">Grün</option>
                            <option value="red">Röt</option>
                            <option value="yellow">Gelb</option>
                          </select>
                        </span>
                        <span style={{fontWeight: 'bold'}}>{item.price}€</span>
                      </div>
                    </Col>
                  </Row>
                )
              })

              }
            </Col>
            <Col className='p-0'>
              <div className='bg-white p-3'>
                <h1>Gesamt:</h1>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='titleSmallB'>Gesamtpreis:</span>
                  <span className='titleSmallB'>{(Math.round(total * 100) / 100).toFixed(2) }€</span>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='titleSmallB'>Vesandkosten:</span>
                  <span className='titleSmallB'>5.00€</span>
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
                  <Button onClick={handdleKasse} className='w-75'>Kasse</Button>
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
