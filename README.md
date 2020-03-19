# Nest

## Prerequisites

1. Make sure you have npm and node installed. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2. Install npx https://www.npmjs.com/package/npx
`npm install -g npx` (MacOS)

3. Install yarn https://classic.yarnpkg.com/en/docs/install/#mac-stable 
`brew install yarn` (MacOS)

4. Install mongoDb https://docs.mongodb.com/manual/administration/install-community/


## SETUP

1. Install dependencies
`yarn install`

2. Start the app
`yarn dev`

3. Check that the Express server is running by visiting http://localhost:3000/ 

4. Add a dummy entry to your mongo database!

- Connect to mongo in your terminal by running `mongo <db name>`. Default name is "nest" if not passed through .env `mongo nest`
- Once you're in the db console, create the `users` collection. `> db.createCollection("users");`
- Insert a user with an email `> db.users.insert({"email": "your@email.com"})`;

5. Check that the user you just added appears in the users route http://localhost:3000/users