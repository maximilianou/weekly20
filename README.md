# weekly20

## step-1
##### Makefile, the tool that make me think like if i were documenting/scripting/automating steps

typescript


```
npm install -g create-react-app

npx create-react-app ui --template typescript

```

```
cat Makefile 
info:
	@echo 'type Learning {         '
	@echo '         Typescript,    '
	@echo '         Nodejs,        '
	@echo '         Express,       '
	@echo '         React,         '
	@echo '         Github Action, '
	@echo '         Aws            '
	@echo '}                       '
	@echo ' '
	@echo '  #Makefile this .PHONY does not check for updated files, '
	@echo '    just run every command in the target " make ui " will allways run without file checking.'
	@echo ' '

ui:
	cd ui && npm run start

# this .PHONY does not check for updated files, just run every command in the target " make ui " will allways run without file checking.
.PHONY: ui

```

## step-2 
##### Create React App Typescript

https://github.com/maximilianou/weekly20/commit/04bef818113414125d38774708051f3e985a7878


## step-3
##### Dockerize Environment, using docker-compose and Makefile to centrilize commands

https://github.com/maximilianou/weekly20/commit/af722cf39046982c7da7cb3c9536615fc6438132

```
root@instrument:~# apt -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common

root@instrument:~# curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

root@instrument:~# apt-key fingerprint 0EBFCD88

root@instrument:~# add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

root@instrument:~# apt -y update; apt -y install docker-ce docker-ce-cli containerd.io

root@instrument:~# docker run hello-world

root@instrument:~# usermod -aG docker maximilianou

maximilianou@instrument:~/projects/weekly20$ docker run hello-world

root@instrument:~# curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

root@instrument:~# chmod +x /usr/local/bin/docker-compose 

maximilianou@instrument:~/projects/weekly20$ docker-compose --version
docker-compose version 1.27.4, build 40524192
```

```
maximilianou@instrument:~/projects/weekly20$ docker-compose -f docker-compose.dev.yml up --build

maximilianou@instrument:~/projects/weekly20$ docker exec -i cook20_nginx bash

curl http://cook20_ui:3000/
```

### Typescript - React - docker-compose - nginx loadbalancer attending in port 8020.

 - Redirecting internally inside of the running containers ( http://cook20_ui:3000 )
 - Looking directly ui in port 4220, externally outside the running containers (http://localhost:4220)
 - finally http://localhost:8020 nginx attending http.

```
maximilianou@instrument:~/projects/weekly20$ docker-compose -f docker-compose.dev.yml up --build

make test
```



## step-4
##### Build a React Component in Typescript

https://github.com/maximilianou/weekly20/commit/b9cc74899984e746463befe1cb53ae91fc2fb7b8


REFERENCE: https://github.com/piotrwitek/react-redux-typescript-guide

```tsx
// index.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './mvp.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App  message='Planting Carrot!' />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);
```

```tsx
// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
const contentMessage : string = 'Clean React';
test('renders learn react link', () => {
  render(<App message={contentMessage}/>);
  const linkElement = screen.getByText(/Clean React/i);
  expect(linkElement).toBeInTheDocument();
});
```

```tsx
// App.tsx
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
```
```tsx
import * as React from 'react';
type CounterState = { count: number }
type ActionType = 
                | { type: 'increment', payload: number}
                | { type: 'decrement', payload: number}
const initialState: CounterState = {count: 0};
const reducer = (state: CounterState, action: ActionType): CounterState => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload};
    case 'decrement':
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}
const Counter:React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: 'decrement', payload: 5})}>-</button>
        <button onClick={() => dispatch({type: 'increment', payload: 5})}>+</button>
    </>
  );
}
export default Counter;
```

```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react",
    "noEmit": true
  },
  "include": [
    "src"
  ]
}
```

## step-5

REFERENCE: https://dev.to/rmiyazaki6499/deploying-a-production-ready-react-express-app-on-aws-62m

https://aws.amazon.com/blogs/containers/deploy-applications-on-amazon-ecs-using-docker-compose/


``` 

docker context create ecs myecscontext

curl -L https://raw.githubusercontent.com/docker/compose-cli/main/scripts/install/install_linux.sh | sh


maximilianou@instrument:~/projects/weekly20$ docker context create ecs --local-simulation ecsLocal
Successfully created ecs-local context "ecsLocal"

maximilianou@instrument:~/projects/weekly20$ docker context ls
NAME                TYPE                DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT   ORCHESTRATOR
default *           moby                Current DOCKER_HOST based configuration   unix:///var/run/docker.sock                         swarm
ecs                 moby                                                          unix:///var/run/docker.sock                         swarm
ecsLocal            ecs-local           ECS local endpoints 
```
### Install AWS Cli

```
root@instrument:~# curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

root@instrument:~# unzip awscliv2.zip 

root@instrument:~# ./aws/install 

maximilianou@instrument:~/projects/weekly20$ aws --version
aws-cli/2.1.6 Python/3.7.3 Linux/4.19.0-12-amd64 exe/x86_64.debian.10 prompt/off

```

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html

```
https://console.aws.amazon.com/iam/home?region=us-east-2#/users

maximilianou@instrument:~/projects/weekly20$ aws configure
AWS Access Key ID [****************]: 
AWS Secret Access Key [****************]: 
Default region name [None]: ****
Default output format [None]: ****


maximilianou@instrument:~/projects/weekly20$ cat ~/.aws/credentials 
[default]
aws_access_key_id = A...
aws_secret_access_key = q...


maximilianou@instrument:~/projects/weekly20$ docker context create ecs myecscontext
? Create a Docker context using: An existing AWS profile
? Select AWS Profile default
Successfully created ecs context "myecscontext"


maximilianou@instrument:~/projects/weekly20$ docker context ls
NAME                TYPE                DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT   ORCHESTRATOR
default *           moby                Current DOCKER_HOST based configuration   unix:///var/run/docker.sock                         swarm
ecs                 moby                                                          unix:///var/run/docker.sock                         swarm
ecsLocal            ecs-local           ECS local endpoints                                                                           
myecscontext        ecs  

```

https://docs.docker.com/engine/context/ecs-integration/

https://docs.docker.com/compose/compose-file/



### Functional Programming, fp-ts, safeFetch

```
npm i fp-ts
npm i node-fetch @types/node-fetch
```

```
maximilianou@instrument:~/projects/weekly20$ cat api/safeFetch.ts 
```

```ts
import * as TE from "fp-ts/lib/TaskEither";
import * as E from "fp-ts/lib/Either";
const fetch = require('node-fetch');

type User = {

};

export const safeFetch = (
  url: string,
  errMessage: string
): TE.TaskEither> => 
     TE.tryCatch(
       () => fetch(url).then( res => res.json()),
       () => new Error(errMessage)
     );

safeFetch(
  "https://jsonplaceholder.typicode.com/users",
  "failed to fetch users"
)().then(E.fold(console.error, console.log));
```

Run code, over command line:

```
maximilianou@instrument:~/projects/weekly20/api$ ./node_modules/.bin/ts-node safeFetch.ts
```

## step-7
--------------------

### React Types Props React.FC<AppProps>

AppTypes.ts
```ts
export type PropImage = {
  img: string,
  alt: string
}
export type AppProps = { message: string } & PropImage;
```

App.tsx
```tsx
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
```

Header.tsx
```tsx
import React from 'react';
import { PropImage }  from '../types/AppTypes';
const Header : React.FC<PropImage> = (props:PropImage)  => {
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
  export default Header;
```
