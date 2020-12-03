import React from 'react';
import Counter from './comp/Counter';
import carrotImg from './img/BySmalllikeTheNounProject.svg';
type AppProps = { message: string };
const App: React.FC<AppProps> = 
        ( { message }: AppProps ) =>  
          <>
            <header>
              <img src={carrotImg} alt='carrot'/>
               Carrot
              <img src={carrotImg} alt='carrot'/>
            </header>
            <section>{message}</section>
            <section><article><Counter  /></article></section>
            <footer>
               <img src={carrotImg} alt='carrot'/>
               Handmade with Passion! 
               <img src={carrotImg} alt='carrot'/>
            </footer>
          </>;

export default App;
