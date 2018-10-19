Backend
----------
### Assumptions
 - It was assumed that the database should not persist. As mentioned in the task it could be prepopulated every time.
 - The log's view for the api is not optimized as the ideal strategy is to use the ELK Stack. However I couldn't get it working in time on my only dev machine, I had problems causing the mongodb to run out of memory and going swap.

### External Libraries
The server was built from scratch with no use of starters or frameworks.
The libs present on this project are:
- `body-parser` bodyparser for json data   
- `cors` crossdomain  
- `ejs` view for the logs   
- `express` app  
- `mongoose` library for working with mongodb  
- `winston` logger  

devDependencies:
- `chai` tests   
- `mocha` testa  
- `mocha-prepare` tests
- `supertest` tests  
- `nodemon` hot reload in dev


The api documentation can be found on the swagger.
