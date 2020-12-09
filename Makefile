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
stop-vm:
	docker-compose -f docker-compose.dev.yml down

start-aws:
	docker --context myecscontext --file docker-compose.dev.yml compose  up
stop-aws:
	docker --context myecscontext --file docker-compose.dev.yml compose  down
	


# this .PHONY does not check for updated files, just run every command in the target " make ui " will allways run without file checking.
.PHONY: ui test vm stop-vm start-aws stop-aws
