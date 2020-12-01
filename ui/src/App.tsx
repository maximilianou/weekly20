import React from 'react';
import Counter from './comp/Counter';
type AppProps = { message: string };
const App: React.FC<AppProps> = 
        ( { message }: AppProps ) =>  
          <>
             <section>{message}</section>
             <article><Counter  /></article>
          </>;

export default App;
