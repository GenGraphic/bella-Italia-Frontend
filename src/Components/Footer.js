import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

const Footer = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [userSubject,setUserSubject] = useState('');

    const sendEmail = () => {
        const data = {
          name: userName,
          email: userEmail,
          message: userMessage,
          subject: userSubject
        };
      
        axios.post('http://localhost/api_bella_italia/send_email.php', data)
          .then(response => {
            console.log(response.data); // Output the server response
          })
          .catch(error => {
            console.error(error);
          });
    };
    
    return (
        <Container className='mt-2 border-top'>
            <Row>
                <Col className='col-12 col-md-6 col-xl-4 d-flex flex-column col-3'>
                    <span className='titleBigB'>Support:</span>
                    <a className='paragraphB' href= 'mailto: bellaitalia@outlook.com'>bellaitalia@outlook.com</a>
                    <a className='paragraphB' href='tel: +49 172 7480114'>+49 172 7480114</a>
                    <img src={require('../images/logo.png')} alt='Logo Bella Italia Shop' width={50}/>
                </Col>

                <Col  className='col-12 col-md-6 col-xl-4 d-flex flex-column col-3'>
                    <span className='titleBigB'>Website map:</span>
                    <a className='paragraphB' href='/'>Home</a>
                    <a className='paragraphB' href='/About'>Über uns</a>
                    <a className='paragraphB' href='/Shop'>Shop</a>
                </Col>
                <Col className='col-12'>
                    <span className='titleBigB'>Kontaktieren Sie uns:</span>
                    <Form action=''>
                        <Row>
                            <Col>
                                <Form.Control placeholder='Name' onChange={(text) => setUserName(text.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Control placeholder='E-mail Adress' onChange={(text) => setUserEmail(text.target.value)}/>
                            </Col>
                        </Row>
                        <Row className='mt-1'>
                            <Col>
                                <Form.Control placeholder='Subject' onChange={(text) => setUserSubject(text.target.value)}/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 mt-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Dein Nachricht' onChange={(text) => setUserMessage(text.target.value)}/>
                        </Form.Group>
                        <Row className='d-flex justify-content-end'>
                            <Button onClick={sendEmail} className='w-25 mx-3' variant='success'>Senden</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <p className='m-0 text-lg-center'>All rights reserved to Bella Italia. 2023</p>
            </Row>
        </Container>
    )
}

export default Footer
