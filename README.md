# Joldau
Joldau - Guide application for Petroleum Engineering of Satbayev University

# Installation
- The project is developed with `Python 3.9`
- Create a new virtual environment `virtualenv -p python3.9 venv`
  - On Windows to use `virtualenv` command need to register path where `virtualenv` script installed

- Activate new environment
  - On Linux: `source venv/bin/activate`
  - On Windows: `.\venv\Scripts\activate`

- Install dependencies from `requirements.txt`: `pip install -r requirements.txt`

# Development
- Apply migrations: `./manage.py migrate`
- Add super user: `python manage.py createsuperuser`
- Add fake data: `./manage.py addfake`

- Run server: `python manage.py runserver`
