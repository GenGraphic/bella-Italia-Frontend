import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../Context/ShoppingCartContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import style from '../css/Kasse.module.css';

const Kasse = ({ closeThis, toPay, steuer, netto, versand, setVersand }) => {
    const navigate = useNavigate();
    const { shoppingCartList, setShoppingCartList } = useContext(ShoppingCartContext);
    const countriesList = [
        "Österreich", "Belgien", "Bulgarien", "Kroatien", "Zypern", "Tschechische Republik",
        "Dänemark", "Estland", "Finnland", "Frankreich", "Deutschland", "Griechenland",
        "Ungarn", "Irland", "Italien", "Lettland", "Litauen", "Luxemburg", "Malta",
        "Niederlande", "Polen", "Portugal", "Rumänien", "Slowakei", "Slowenien", "Spanien"
    ];
    const [formData, setFormData] = useState({
        name: "", vorname: "", email: "", country: "Deutschland", PLZ: "", city: "",
        street: "", houseNr: "", telefon: "", message: "", total: toPay, versand: versand,
        netto: netto, steuer: steuer, items: JSON.stringify(shoppingCartList)
    });
    const clientID = process.env.REACT_APP_PAYPAL_ID_PROD;
    const [fieldsValid, setFieldsValid] = useState(false);
    const [orderApproved, setOrderApproved] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const validateFields = (data) => {
            const isNonEmpty = (value) => value.trim().length > 0;
            if (!isNonEmpty(data.name) || !isNonEmpty(data.vorname) || !isNonEmpty(data.email) ||
                !isNonEmpty(data.PLZ) || !isNonEmpty(data.city) || !isNonEmpty(data.street) || 
                !isNonEmpty(data.houseNr)) {
                setFieldsValid(false);
            } else {
                setFieldsValid(true);
            }
        };
        validateFields(formData);
    }, [formData]);

    useEffect(() => {
        const handleThankYou = async () => {
            const params = new URLSearchParams(formData);
            try {
                setIsSending(true);
                const response = await fetch('https://bellaitaliaa.com//api/thank_you.php', {
                    method: 'POST',
                    body: params.toString(formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        setShoppingCartList([]);
                        navigate('/Shop');
                    } else {
                        alert(data.message);
                    }
                } else {
                    alert(response.statusText);
                }
            } catch (error) {
                alert(error);
            } finally {
                setIsSending(false);
            }
        };
        if (orderApproved) {
            handleThankYou();
            setOrderApproved(false);
        }
    }, [orderApproved]);

    useEffect(() => {
        if (formData.country && formData.country === "Deutschland") {
            setVersand(6.25);
        } else {
            setVersand(10);
            alert("Da Sie außerhalb Deutschlands bestellen, betragen die Versandkosten 10 €.");
        }
    }, [formData.country, setVersand]);

    return (
        <div className={`position-absolute top-50 start-50 translate-middle pt-5 p-lg-4 ${style.body}`}>
            <div className='d-flex justify-content-between'>
                <span className='titleBigB'>Kasse</span>
                <img onClick={() => closeThis(false)} src={require('../images/icon/close.png')} width={20} height={20} alt='Close Icon' />
            </div>
            <form>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Name:* </label>
                    <div className='d-flex gap-2'>
                        <input type='text' placeholder='Max' name='vorname' value={formData.vorname} onChange={handleChangeInput} />
                        <input type='text' placeholder='Mustermann' name='name' value={formData.name} onChange={handleChangeInput} />
                    </div>
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Email: *</label>
                    <input type='email' placeholder='jhon@beispiel.com' name='email' value={formData.email} onChange={handleChangeInput} />
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Land: *</label>
                    <Dropdown options={countriesList} value={formData.country} name='country' onChange={(e) => setFormData({ ...formData, country: e.value })} />
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>PLZ, Ort: *</label>
                    <div className='d-flex gap-2'>
                        <input type='text' placeholder='123456' name='PLZ' value={formData.PLZ} onChange={handleChangeInput} />
                        <input type='text' placeholder='Berlin' name='city' value={formData.city} onChange={handleChangeInput} />
                    </div>
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Straße, Hausnummer: *</label>
                    <div className='d-flex gap-2'>
                        <input type='text' placeholder='Musterstraße' name='street' value={formData.street} onChange={handleChangeInput} />
                        <input type='text' placeholder='12' name='houseNr' value={formData.houseNr} onChange={handleChangeInput} />
                    </div>
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Telefonnummer:</label>
                    <input type='text' placeholder='+49 0151 4950165' name='telefon' value={formData.telefon} onChange={handleChangeInput} />
                </div>
                <div className='d-flex justify-content-between my-3 flex-column gap-1'>
                    <label>Sonstige Nachricht:</label>
                    <input type='text' placeholder='Nicht pflichtig' name='message' value={formData.message} onChange={handleChangeInput} />
                </div>
                <span className='text-info'>Bitte füllen Sie alle mit einem * markierten Felder aus.</span>
            </form>
            <hr />
            <span>Zahlung möglichkeiten:</span>
            <div>
                <PayPalScriptProvider
                    options={{
                        currency: "EUR",
                        "client-id": clientID
                    }}
                >
                    {isSending ? (
                        <h4 className='text-center'>Loading...</h4>
                    ) : (
                        <PayPalButtons
                            disabled={!fieldsValid}
                            onClick={() => setFieldsValid(false)}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: { value: toPay.toFixed(2) }
                                    }]
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then(() => {
                                    setOrderApproved(true);
                                });
                            }}
                            onCancel={() => closeThis(false)}
                        />
                    )}
                </PayPalScriptProvider>
            </div>
        </div>
    );
};

export default Kasse;
