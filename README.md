# joldau
 Joldau - Guide application for Petroleum Engineering of Satbayev University

# Installation

# Configure application
- Install all modules: `npm install`

# Configure db
- If on the server knex cli doesn't exist, so it needs to be installed:
  - Run command: `npm install knex -g`
- At first needs to ignore database to push server:
  - Open `.gitignore` file and uncomment `# *.sqlite3`
- If database not exist:
  - For production:
    - Migrate database schema: `knex migrate:latest --env production`
  - For development:
    - Migrate database schema: `knex migrate:latest`
  
  - Also you may fill fake data using command:
    - Seed data: `knex seed:run`

# Run application
- Run in dev mode: `npm run dev`
- Run in prod mode: 
  - At first build: `npm run build`
  - Then run: `npm run start`
