# CN334 Portfolio

## About The Project
This project is created for mini-project of CN334 subject, Thammasat University
### Built With
* [Laravel 8](https://laravel.com)
* [React.js](https://reactjs.org)
* [React Bootstrap](https://react-bootstrap.github.io) (6310742843)
* [MDBootstrap 5](https://mdbootstrap.com) (6310742181)

## Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
* PHP (>=7.3)
* MySQL (>=5.7)
* Composer (>= 2.2.0)
* node.js (>=16)

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/MrTheBank/CN334-Team_63
   ```
2. Switch directory to 6310742181 or 6310742843
   ```sh
   cd 6310742181
   ```
3. Install all the PHP dependencies using composer
   ```sh
   composer install
   ```
4. Copy the example env file and make the required configuration changes in the .env file
   ```sh
   cp .env.example .env
   ```
5. Generate a new application key
   ```sh
   php artisan key:generate
   ```
6. Run the database migrations (Set the database connection in .env before migrating)
   ```sh
   php artisan migrate
   ```
7. Install all the node.js dependencies
   ```sh
   npm install
   ```
8. Generate css and js files
   ```sh
   npm run production
   ```
9. Start the local development server
   ```sh
   php artisan serve
   ```
You can now access the server at http://localhost:8000

### Collaborators
* [MrTheBank](https://github.com/MrTheBank) (Ponlapat Ittiratchapong 6310742181)
* [Laravel 8](https://github.com/kim-pukkanun) (Pukkanun Sombutthai 6310742843)