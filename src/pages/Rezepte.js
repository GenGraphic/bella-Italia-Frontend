import React, {useEffect, useState} from "react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../css/Rezepte.module.css';

const Rezepte = () => { 
    const [rezepte, setRezepte] = useState([]);
    const imageBaseUrl = "https://bellaitaliaa.com/api/images/";

    useEffect(() => {
        fetchRezepte();
    }, [])

    //fetch the recepies
    const fetchRezepte = () => {
        fetch('https://bellaitaliaa.com//api/get_rezepte.php')
        .then(response => response.json())
        .then ( data => {
            if(data.success) {
                setRezepte(data.rezepte);

            } else {
                console.log(alert(data.message));
            }
        })
        .catch(error => console.log('Error getting the recepies: ' + error.message ))
    }

    return(
        <Container>
            <Menu/>
                {rezepte.map((item) => {
                    return (
                        <Row className="my-3 py-3 border-bottom" key={item.rezept_id}>
                            <Col className="col-12 col-md-auto text-center">
                                <img src={imageBaseUrl + item.rezept_image} alt="Rezept" className={styles.recepieImg}/>
                            </Col>
                            <Col>
                                <h3 className="text-center">{item.rezept_title}</h3>

                                <Row>
                                    <Col>
                                        <div className={styles.decoLine}>

                                        </div>
                                    </Col>
                                    <Col className="col-auto d-flex gap-3 align-items-center">
                                        <img src={require('../images/icon/clock.png')} className={styles.icons} alt="Icons"/>
                                        <span>{item.rezept_duration}</span>
                                    </Col>
                                    <Col className="col-auto d-flex gap-3 align-items-center">
                                        <img src={require('../images/icon/portion.png')} className={styles.icons} alt="Icons"/>
                                        <span>{item.rezept_portions}</span>
                                    </Col>
                                    <Col>
                                        <div className={styles.decoLine}>

                                        </div>
                                    </Col>
                                </Row>

                                <Row className="flex-wrap my-3">
                                    {item.rezept_ingredients.split(',').map((ingredient, index) => {
                                        return (
                                            <Col className="col-12 col-md-3" key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        {ingredient}
                                                    </label>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>

                                <Row className="my-3">
                                    <p className="p-2 text-center text-md-left">
                                       {item.rezept_content} 
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    )
                })}
            <Footer />
        </Container>
    )
}

export default Rezepte;