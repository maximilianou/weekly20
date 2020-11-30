# weekly20
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

#### step-2 

https://github.com/maximilianou/weekly20/commit/04bef818113414125d38774708051f3e985a7878


#### step-3

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

 - Redirecting internally ( http://cook20_ui:3000 )
 - to ui in port 4220 externally (http://localhost:4220)
 - finally, http://localhost:8020 nginx attending http

```
maximilianou@instrument:~/projects/weekly20$ docker-compose -f docker-compose.dev.yml up --build

make test
```


#### step-4

```

```
