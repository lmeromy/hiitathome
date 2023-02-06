# hiitathome

See it live: https://hiitathome.herokuapp.com
UPDATE: as of Jan 2023, this app is no longer live because Heroku got rid of their free tier, and I haven't redeployed elsewhere.

A custom HIIT workout generator! No equipment required for these low-impact moves: perfect for at home, outside, or at the gym.
Full stack app built with: React frontend, Express.js backend, PostgreSQL database

## To run this app:

1. In the terminal in the main directory, type `npm run dev` which will start both the front end and back end simultaneously ( thanks to the `concurrently` package)
2. You should see the app open in your web browser at localhost:3000
3. To see the api, take a look at http://localhost:5000/api/exercises in your browser

##### Note: you will need to have installed all dependencies and will need to have an instance of postgres running. You will also need to configure the server to talk to your database. See the schema file (/database/schema.sql) for the database structure.

##### Reference the following tutorial for some explanations, though I did not use this tutorial to build this app:

https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/

##### Deployment info:

https://hiitathome.herokuapp.com
Deployed on Heroku, use the Heroku CLI
-To update deployed code, first commit and push all code to the master branch. Then in the CLI: `git push heroku master`
-To open the deployed app from the CLI `heroku open`
-To directly view the deployed postgres DB: `heroku pg:psql --app hiitathome`
