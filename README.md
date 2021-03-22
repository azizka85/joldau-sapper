# joldau
 Joldau - Guide application for Petroleum Engineering of Satbayev University

# Installation

# Configure application
- Install all modules: `npm install`

# Configure db
- If database not exist:
  - Migrate database schema: `npm run migrate`  
  - Also you may fill fake data using command:
    - Seed data: `npm run seed`
- In the future if you don't want update db on server:
  - Open `.gitignore` file and uncomment `# *.sqlite3`    

# Run application
- Run in dev mode: `npm run dev`
- Run in prod mode: 
  - At first build: `npm run build`
  - Then run: `npm run start`
