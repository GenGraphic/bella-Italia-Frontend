import React, {useEffect, useState, useContext} from 'react';

import ShopingCartContext from '../Context/ShoppingCartContext';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import style from '../css/Kasse.module.css';

const Kasse = ({closeThis, toPay, steuer, netto, versand}) => {
    const { shopingCartList, setShopingCartList } = useContext(ShopingCartContext);
    const [total, setTotal] = useState((Math.round(toPay * 100) / 100).toFixed(2));
    const [buttonSate, setButtonState] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        PLZOrt: "",
        streetNr: "",
        telefon: "",
        message: "",
        total: total,
        versand: versand,
        netto: netto,
        steuer: steuer,
        items: JSON.stringify(shopingCartList)
    })
    const [orderAproved, setOrderAproved] = useState(false);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData ({ ...formData, [name]: value })
    }


    useEffect(() => {
        if(formData.name !== "" && formData.email !== "" && formData.PLZOrt !== "" && formData.streetNr !== "") {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }, [formData.name, formData.email, formData.PLZOrt, formData.streetNr])


    useEffect(() => {
        if(orderAproved){
            handleThankYou();
            setShopingCartList([]);
        }
        
        setOrderAproved(false);
    }, [orderAproved])

    //send thank you Email to the client
    const handleThankYou = () => {
        
        const params = new URLSearchParams(formData);

        fetch('https://bellaitaliaa.com//api/thank_you.php',  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(formData)
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
    }
return (
    <div className={style.body}>
        <div className='d-flex justify-content-between'>
            <span className='titleBigB'>Kasse</span>
            <img onClick={() => closeThis(false)} src={require('../images/icon/close.png')} width={20} height={20} alt='Close Icon'/> 
        </div>
        <form>
            <div className='d-flex justify-content-between my-2'>
                <label>Name:* </label>
                <input type='text' placeholder='Max Musterman' name='name' value={formData.name} onChange={handleChangeInput}/> 
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Email: *</label>
                <input type='email' placeholder='jhon@beispiel.com' name='email' value={formData.email} onChange={handleChangeInput}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>PLZ, Ort: *</label>
                <input type='text' placeholder='123456' name='PLZOrt' value={formData.PLZOrt} onChange={handleChangeInput}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Straße, Hausnummer: *</label>
                <input type='text' placeholder='Musterstraße, 01' name='streetNr' value={formData.streetNr} onChange={handleChangeInput}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Telefonnummer:</label>
                <input type='text' placeholder='+49 0151 4950165' name='telefon' value={formData.telefon} onChange={handleChangeInput}/>  
            </div>
            <div className='d-flex justify-content-between my-2'>
                <label>Sonstige Nachricht:</label>
                <input type='text' placeholder='Nicht pflichtig' name='message' value={formData.message} onChange={handleChangeInput}/>  
            </div> 
            <span className='text-info'>Bitte füllen Sie alle mit einem * markierten Felder aus.</span>
        </form>

        <hr></hr>

        <span>Zahlung möglichkeiten:</span>

        <div className=''>
        <PayPalScriptProvider 
            options={{
                currency: "EUR",
                "client-id": process.env.REACT_APP_PAYPAL_ID_PROD
            }}
            >
                <PayPalButtons 
                disabled={buttonSate}
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
                        setOrderAproved(true);
                    });
                }}
                />
        </PayPalScriptProvider>
            
        </div>
      
    </div>
  )
}

export default Kasse
