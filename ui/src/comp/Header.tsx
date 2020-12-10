import React from 'react';
import { PropImage }  from '../types/AppTypes';
const Header : React.FC<PropImage> = ( {img, alt} :PropImage)  => {
    return (
      <>
            <header>
              <img src={img} alt={alt}/>
               Carrot
              <img src={img} alt={alt}/>
            </header>
      </>
    );
  }
  export default Header;