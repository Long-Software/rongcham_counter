init:
	npm i
	npx prisma generate
clean:
	npx prettier . --write
