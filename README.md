## Vue Todos with Vuex

## Installation guide
There are some prerequisites you will need to fulfil before running the project locally. Please see below.


### Install json-server
Before you start, you must install `json-server` as a global package.
```bash
npm install -g json-server
```
### Install Vue dependencies
Now that you have that installed, you need to install the dependencies for this project. Navigate your terminal application to the root of this project and run
```bash
npm install
```


## Run project
To run the project, you will need to execute 2 commands.

### Local Json Server
In the root of the project, run the following:
```bash
json-server --watch db.json
```
This will start a local server on port 3000 with the following endpoints

- GET, POST - http://localhost:3000/todos
- GET, PUT, PATCH, DELETE - http://localhost:3000/todos/:id

### Server Vue Application
Run the following command to start the Vue local server
```bash
npm run serve
```

This will serve vue on http://localhost:8080

