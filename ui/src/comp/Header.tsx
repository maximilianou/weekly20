import React from 'react';
import { PropImage }  from '../types/AppTypes';
const Footer : React.FC<PropImage> = (props:PropImage)  => {
    return (
      <>
            <header>
              <img src={props.img} alt={props.alt}/>
               Carrot
              <img src={props.img} alt={props.alt}/>
            </header>
      </>
    );
  }
  export default Footer;