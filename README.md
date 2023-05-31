# The Cat App

Cats and all you need to know about them

## Getting Started

Clone the application and follow the below steps to run server and client application.

### Server
1. Run ``cd server``.
2. Install npm packages with ``yarn install`` command.
2. Create **.env** file by copying *.env.sample* file in **root directory**.
3. Modify .env file.
5. Use ``yarn dev`` command to run the application in local with watch mode and live reloading.
6. Use ``yarn prod`` command to run the application in higher environments.
7. The application will start to run in http://localhost:4000.

#### Api Documentation
Once the local server is started, import **docs/APIs.postman_collection.json** into collection and import **docs/Local.postman_environment.json** into variables on your postman app.
Choose the environment as local and you can try out all the listed APIs in the collection.

## License
**MIT license**