init:
	npm i
clean:
	npx prettier . --write
migrate:
	npx prisma generate
	npx prisma migrate dev