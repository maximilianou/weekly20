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

test:
	curl http://localhost:4220/
	curl http://localhost:8020/

vm:
	docker-compose -f docker-compose.dev.yml up --build
vm-down:
	docker-compose -f docker-compose.dev.yml down

start-aws:
	docker context use myecscontext
	docker compose --file docker-compose.dev.yml up 
	docker context use default 
stop-aws:
	docker context use myecscontext
	docker compose --file docker-compose.dev.yml down 
	docker context use default 
	


# this .PHONY does not check for updated files, just run every command in the target " make ui " will allways run without file checking.
.PHONY: ui test vm
