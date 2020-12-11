import React from 'react';
import { PropImage }  from '../types/AppTypes';
const Header : React.FC<PropImage> = ( {img, alt} :PropImage)  => {
    return (
      <>
            <header>
              <img src={img} alt={alt}/>
               <a href='https://github.com/maximilianou/weekly20' 
                  target='_blank' 
                  rel='noreferrer'>Learning Carrot Github</a>
              <img src={img} alt={alt}/>
            </header>
      </>
    );
  }
  export default Header;