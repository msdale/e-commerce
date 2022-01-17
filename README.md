# e-commerce

## Description

Building a node-based Ecommerce site.

## Table Of Contents

- [e-commerce](#e-commerce)
  - [Description](#description)
  - [Table Of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)

## Installation

To install locally, clone this repository to your local environment.  This is a node application, so node must be installed.  MySQL must also be installed locally.  For mySQL installation see https://dev.mysql.com/doc/refman/8.0/en/installing.html.  If you need to install node, check out this link  https://nodejs.org/en/download/.  Once mySQL and node (and npm) are installed, attach to the repository root directory and update npm dependencies with the following command:

* npm install express mysql2 dotenv sequelize

Additionally you must execute the a database initialization script.  Attach to the root directory of the repository and connect to mySQL, then type the source command...

mysql> source db/schema.sql

THIS SQL SCRIPT SHOULD ONLY BE RUN ONCE TO INITIALIZE THE MYSQL DATABASE/SCHEMA AS A FIRST-TIME SETUP.

See demo of the installation process below...


https://user-images.githubusercontent.com/90280725/149690536-69174b58-808f-45e3-85f4-8b50bc2831d7.mp4


## Usage

To execute the application, you have 3 command-line options.  From the root directory of the repository clone, type one of the following:

1.  *npm run start*           (starts the server and connects to the database)
2.  *npm run startover*       (starts the server and synchronizes database with sequelize models...all data lost)
3.  *npm run startseed*       (starts the server and synchronizes database with sequelize models...all data replaced)

The application will remain running in the terminal until it is terminated with a CTRL-C keystroke.

See the following demo for how to start the application...

https://user-images.githubusercontent.com/90280725/149808490-9c53bdb3-d10c-45dc-9276-9714a0023ed4.mp4


There are 4 sequelize models with associations as defined in the REPOSITORY-ROOT/models/index.js file.

Here are the "model-to-table" names:

* Category  ->  category
* Product   ->  product
* ProductTag->  product_tag
* Tag       ->  tag

This application uses the Express server and Sequelizer ORM to manage and manipulate data stored in a MySQL database instance.

See the following demo to understand the functionality available through the REST API.

APPLICATION USAGE DEMO...


## Questions

Any questions, please contact Mark Dale.

My email address is: msdaledad@gmail.com
My github profile is https://github.com/msdale