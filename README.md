# Todo react app

This app would be my starting point of any future apps. App was deployed on [Heroku](https://todo-app-mern-pawel-stanecki.herokuapp.com)

## dev

Steps to start the app:

1. Install dependencies `npm install` in root folder
2. Start development mode of the app `npm run start`

### Project consists of:

App consist of:

Backend:

- NodeJS
- Express
- Mongoose

Database:

- Mongo

Frontend:

- React
- Webpack
- Jest

App was deployed and store in Heroku.

#### TODO (Still in progress)

1. Deploying automation
2. Optimize wepback production config file

### Deploy Server (AWS)

1. Install deps `npm install`
2. Restart [pm2](http://pm2.keymetrics.io/docs/usage/quick-start/) process `pm2 start npm --name "backend" -- run start:production`

### Deploy Client (AWS)

1. Make sure you are in `dist` dir.
2. Transfer files `scp -i ~/.ssh/sshFileName.pem * userName@hostName:~/dirName`

#### Deploying client-server (Heroku)

1. Check `.env` variables on client side
2. Build client `npm run build` make sure you are in the client directory
3. Copy builded files to `public` direactory on server and commit changes
4. Push changes to heroku master `git push heroku master`
5. Revert `.env` variables on the client side if needed
