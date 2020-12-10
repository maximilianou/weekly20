import React from 'react';
import { PropImage }  from '../types/AppTypes';
const Footer : React.FC<PropImage> = ( { img, alt } :PropImage)  => {
    return (
      <>
            <footer>
              <img src={img} alt={alt}/>
               Carrot
              <img src={img} alt={alt}/>
            </footer>
      </>
    );
  }
  export default Footer;