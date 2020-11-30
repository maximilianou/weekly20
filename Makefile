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

# this .PHONY does not check for updated files, just run every command in the target " make ui " will allways run without file checking.
.PHONY: ui
