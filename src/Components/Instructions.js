import React from 'react';

import styles from '../css/Instructions.module.css';

import Button from 'react-bootstrap/Button';



const Instructions = ({instructions, setInstructions, videoSrc, title, description, price, colors}) => {
  const videoBaseUrl = "https://bellaitaliaa.com/api/videos/";
  const handdleInstructionsScreen = () => {
      if (instructions) {
        setInstructions(false)
      }
  }


  return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className='d-flex border-0 bg-white' onClick={handdleInstructionsScreen}>
                    <img src={require('../images/icon/close.png')} width={15} alt='Close Bella Italia Einleitung'/>
                </button>
                <p className='titleSmallB m-0 text-center align-self-start'>Einleitung</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: `
                <video controls playsinline class='video'>
                  <source src=${videoBaseUrl + videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>`,
                }}
            />     
            <div className={styles.infoCont}>
              <span className='titleSmallB'>
              {title}:
              </span>
              <p className='paragraphB'>
                {description}
              </p>
              <div style={{display:'flex',width:250,justifyContent:'space-between',alignItems:'center'}}>
                <span className='titleSmallB'>Farbe auswahl: </span>
                {colors.map((item) => {
                  return (
                    <div key={item} style={{width:20,height:20,backgroundColor: item,borderRadius:10,border: '1px solid black'}}></div>
                  )
                })
                }
              </div>
              <div className='d-flex justify-content-between align-items-center mt-2'>
                <span className='titleBigB'>{price}€</span>
                <Button onClick={() => setInstructions(false)}>Jetzt kaufen</Button>
              </div>
            </div>  
        </div>
  )
}

export default Instructions
