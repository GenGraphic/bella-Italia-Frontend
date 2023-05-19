import React from 'react';
import { Player } from 'video-react';

import styles from '../css/Instructions.module.css';

import Button from 'react-bootstrap/Button';



const Instructions = ({instructions, setInstructions, videoSrc, title, description, galery, price}) => {

  const handdleInstructionsScreen = () => {
      if (instructions) {
        setInstructions(false)
      }
    }
  return (
    <div className={styles.body} style={{maxWidth: 500, minWidth:500}}>  
        <div className={styles.container}>
            <div className={styles.header}>
                <button className='d-flex border-0 bg-white' onClick={handdleInstructionsScreen}>
                    <img src={require('../images/icon/close.png')} width={15} alt='Close Bella Italia Einleitung'/>
                </button>
                <p className='titleSmallB m-0 text-center align-self-start'>Einleitung</p>
            </div>
            <div>
              <Player 
                playsInline
                poster='/images/shop/poster.webp'
                src={videoSrc}
              />
            </div>
            <div className={styles.infoCont}>
              <span className='titleSmallB'>
              {title}:
              </span>
              <p className='paragraphB'>
                {description}
              </p>
              <div style={{display:'flex',width:250,justifyContent:'space-between',alignItems:'center'}}>
                <span className='titleSmallB'>Farbe auswahl: </span>
                <div style={{width:20,height:20,backgroundColor:'#62B303',borderRadius:10}}></div>
                <div style={{width:20,height:20,backgroundColor:'#C02120',borderRadius:10}}></div>
                <div style={{width:20,height:20,backgroundColor:'#CEC21F',borderRadius:10}}></div>
              </div>
              <div style={{display: 'flex', justifyContent:'space-between', marginTop: 20}}>
                {galery.map((item) => {
                  return (
                    <img key={item} src={item} width={100} height={100} alt='Bella Italia Galery'/>
                  )
                })}
              </div>
              <div className='d-flex justify-content-between align-items-center mt-2'>
                <span className='titleBigB'>{price}€</span>
                <Button>Jetzt kaufen</Button>
              </div>
            </div>
            
          
        </div>
        
    </div>
  )
}

export default Instructions
