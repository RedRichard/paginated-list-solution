# Paginated list solution - MERN stack app

A MERN stack app that allows access to the blog entries in a Mongo DB through pages, only requesting the necessary amount of entried to the backend server.

## Docker

To run the app use the **docker-compose.yaml** file.
  
    docker-compose -f ./docker-compose.yaml up
  
Access services:
  - Frontend: http://localhost:3000
  - Backend: http://localhost:9000
  - Mongo-Express (To check DB contents): http://localhost:8080 

## Backend

Developed with Node, Express and MongoDB.

This server allows the user to retrieve the blog entries from the frontend server.

A local mongodb instance needs to be running on port 27017.

To run, access the **backend** folder and run:

    npm start

## Frontend

Develped with React.
Provides a user interface from which to view the blog entries page by page.

To run, access the **frontend** folder and run:

    npm start
