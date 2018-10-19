How to run
----------

#### Via Docker (must have Docker running)

 `$ git clone https://github.com/mrmello/fullstack-dev-assesment.git`  
 `$ cd fullstack-dev-assesment`  
 `$ docker-compose up .`  

When docker completes, the following will be acessible
 - The app: http://localhost:80/
 - The api documentation: http://localhost:9081/swagger
 - The api logs: http://localhost:9080/logs
 
Considerations
----------
### Assumptions
 - It was assumed that the failure of the second request (OpenWeatherAPI) should not interfere on the results for the geolocation. So, if the second request fails, the results of the Google Geolocation API will still be shown to the user.
 - It was assumed that the user enter valid geographic coordinates, the application should perform a reverse search with the google API. If the coordinates are not valid, the application will fire the normal search.

### Folder Structure
 - The folder structuring pattern is based on the Components. In each component folder, when necessary, lays the respective reducer and saga for that given component. In this way, as the application grows, it is easier to find out wich component uses wich reducer/saga and also avoids having inumerous "index.js" files

### External Libraries

 - `axios` Useful lib to make requests to remote APIs   
 - `bootstrap` For styling purposes   
 - `object-hash` A helper lib to create hashed values as I wanted to keep a unique key to fetched weatehers and save to localStorage   
 - `react-redux` Redux middleware   
 - `react-scripts` For build purposes   
 - `redux` Redux Middleware   
 - `redux-form` The redux library helper for dealing with forms   
 - `redux-saga` A function generator middleware to the redux store   
 