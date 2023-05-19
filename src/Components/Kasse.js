import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import ShopingCartContext from '../Context/ShoppingCartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import style from '../css/Kasse.module.css';

const Kasse = ({closeThis, toPay}) => {
    const {setShopingCartList} = useContext(ShopingCartContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plzOrt, setPlzOrt] = useState('');
    const [streetNr, setStreetNr] = useState('');
    const [telefon, setTelefon] = useState('');
    const [message, setMessage] = useState('');
    axios.defaults.baseURL = "https://bella-italia-app-server.vercel.app";


    const [total, setTotal] = useState((Math.round(toPay * 100) / 100).toFixed(2));

    const handleSucces = (payerEmail) => {
        axios.post('/api/send-email', {payerEmail})
            .then(() => {
                //Empty the list and redirect the user to Shop Page
                setShopingCartList([]); //empty list
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    useEffect(() => {
        window.localStorage.setItem('userEmail', JSON.stringify(email));
    }, [email])
    
return (
    <div className={style.body}>
        <div className='d-flex justify-content-between'>
            <span className='titleBigB'>Kasse</span>
            <img onClick={() => closeThis(false)} src={require('../images/icon/close.png')} width={20} height={20} alt='Close Icon'/> 
        </div>
        <form>
            <div className='d-flex justify-content-between my-2'>
                <label>Name:</label>
                <input type='text' placeholder='Musterman' onChange={(text) => setName(text.target.value)}/> 
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Email:</label>
                <input type='email' placeholder='jhon@beispiel.com' onChange={(e) => setEmail(e.target.value)}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>PLZ, Ort:</label>
                <input type='text' placeholder='123456' onChange={(text) => setPlzOrt(text.target.value)}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Straße, Hausnummer:</label>
                <input type='text' placeholder='Musterstraße, 01' onChange={(text) => setStreetNr(text.target.value)}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Telefonnummer:</label>
                <input type='text' placeholder='+49 0151 4950165' onChange={(text) => setTelefon(text.target.value)}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Sonstige Nachricht:</label>
                <input type='text' placeholder='Nicht pflichtig' onChange={(text) => setMessage(text.target.value)}/>  
            </div> 
        </form>

        <hr></hr>

        <span>Zahlung möglichkeiten:</span>

        <div className=''>
        <PayPalScriptProvider 
            options={{
                currency: 'EUR',
                "client-id": 
                    "AUTWKVyrkJAgO5tZkoZLbqpOgVWWZRkJ9V4zHQmZT3umQl0mlVmWvg1TwUjmDWloJKhIak3e-3fcmI5p"
            }}
            >
                <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total
                                }
                            }
                        ]
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture()
                    .then(() => {
                        const userEmail = localStorage.getItem('userEmail')
                        handleSucces(JSON.parse(userEmail)) //call the function that send the Email.
                    });
                }}
                />
        </PayPalScriptProvider>
            
        </div>
      
    </div>
  )
}

export default Kasse
