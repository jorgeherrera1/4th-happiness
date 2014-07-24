# [![4th Source Logo](http://www.4thsource.com/wordpress/wp-content/uploads/2014/06/4th-source-logo.png)](http://www.4thsource.com/) Happiness Index

## Prerequisites
  * Node.js - Download and Install [Node.js](http://www.nodejs.org/download/).

## Install
  Using the command line:
  
    $ cd happiness-4th/
    $ npm install
    $ bower install

## Run (development mode)
  When the project is run on development mode, source files are watched by grunt. When a file changes, grunt will run all tasks associated to that file and "redeploy" for immediate testing.
  
  Using the command line:
  
    $ grunt

  Then open your browser and go to:
  
    $ http://localhost:3000

## Run (production mode)
  When the project is run on production mode, source files are minified an concatenated automatically

  Using the command line:
  
    $ grunt production
    $ npm start

  Then open your browser and go to:
  
    $ http://localhost
