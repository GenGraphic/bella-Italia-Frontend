import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = new URLSearchParams(formData);

        fetch("https://bellaitaliaa.com//api/send_email.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(formData)
        })
        .then(response => response.json())
        .then(
            alert("Vielen Dank! Wir haben Ihre E-Mail erhalten und werden uns so schnell wie möglich bei Ihnen melden.")
        )
        .catch(error => {
            console.log("Error: ", error)
        }) 
    }

    
    return (
        <Container className='mt-2 border-top'>
            <Row>
                <Col className='col-12 col-md-4 d-flex flex-column'>
                    <span className='titleBigB'>Support:</span>
                    <a className='paragraphB' href= 'mailto: bellaitaliaa@outlook.com'>bellaitaliaa@outlook.com</a>
                    <a className='paragraphB' href='tel: +49 172 7480114'>+49 172 7480114</a>
                    <p className='m-0 paragraphB'>Siebenbürgerstr. 2d</p>
                    <p className='m-0 paragraphB'>85360, Moosburg an der Isar</p>
                    <img src={require('../images/logo.png')} alt='Logo Bella Italia Shop' width={50}/>
                </Col>

                <Col  className='col-12 col-md-4 d-flex flex-column'>
                    <span className='titleBigB'>Website map:</span>
                    <a className='paragraphB' href='/'>Home</a>
                    <a className='paragraphB' href='/About'>Über uns</a>
                    <a className='paragraphB' href='/Shop'>Shop</a>
                </Col>

                <Col  className='col-12 col-md-4 d-flex flex-column'>
                    <span className='titleBigB'>Über Bella Italia:</span>
                    <p className='m-0 paragraphB'>St.-Nr: 115/202/41940</p>
                    <p className='m-0 paragraphB'>ID: DE273707814</p>
                    <p className='m-0 paragraphB'>Geschäftsführer: Sevdaim Bajrami</p>
                </Col>
            </Row>
            
            <Row>
                <span className='titleBigB'>Kontaktieren Sie uns:</span>
                <Form action=''>
                    <Row>
                        <Col>
                            <Form.Control placeholder='Name' name="name" value={formData.name} onChange={handleInputChange}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder='E-mail Adress' name='email' value={formData.email} onChange={handleInputChange}/>
                        </Col>
                    </Row>
                    <Row className='mt-1'>
                        <Col>
                            <Form.Control placeholder='Subject' name='subject' value={formData.subject} onChange={handleInputChange}/>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 mt-1" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder='Dein Nachricht' name='message' value={formData.message} onChange={handleInputChange}/>
                    </Form.Group>
                    <Row className='d-flex justify-content-end'>
                        <Button onClick={handleSubmit} className='w-25 mx-3' variant='success'>Senden</Button>
                    </Row>
                </Form>
            </Row>

            <Row>
                <p className='m-0 text-lg-center'>All rights reserved to Bella Italia. 2023</p>
            </Row>
        </Container>
    )
}

export default Footer
