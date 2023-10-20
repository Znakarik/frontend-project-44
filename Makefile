#!/usr/bin/env node
start-app:
	node bin/brain-games.js

publish:
	npm publish --dry-run

prettier:
	npx prettier --write .

eslint:
	npx eslint . --fix