install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	suppressor pass 'npm test -s'
	FUNCTION_VERSION=wrong1 suppressor fail 'npm test -s'
	FUNCTION_VERSION=wrong2 suppressor fail 'npm test -s'

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
