ACCESS_TOKEN ?= ''
M ?= default
init:
	npm i
	npx prisma generate
clean:
	npx prettier . --write
migrate:
	npx prisma generate
	npx prisma migrate dev --name init
gen: 
	npx supabase gen types typescript --project-id $(ACCESS_TOKEN) > database.types.ts
	npx prisma generate

commit:
	git add .
	git commit -m "$(M)"
	git push