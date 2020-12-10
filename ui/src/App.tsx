import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Counter from './comp/Counter';
import { AppProps } from './types/AppTypes';



const App: React.FC<AppProps> = 
        ( { message, img, alt }: AppProps ) =>  
          <>
            <Header img={img} alt={alt}></Header>
            <section>{message}</section>
            <section><article><Counter  /></article></section>
            <Footer img={img} alt={alt}></Footer>
          </>;

export default App;
