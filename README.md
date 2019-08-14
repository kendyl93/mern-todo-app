# Todo react app

This app would be my starting point of any future apps. App was deployed on [Heroku](https://todo-app-mern-pawel-stanecki.herokuapp.com)

## dev

Steps to start the app:

1. Install dependencies `npm install` in root folder
2. Start development mode of the app `npm run dev`

### TODO (Still in progress)

1. Deploying automation
2. Investigate injection `.env` while building to hide secret vars
3. Refactor backend code
4. Configure wepback production config file
5. Add `SCSS` and `img` webpack loaders

#### Current deploying process

1. Check `.env` variables on client side
2. Build client `npm run build` make sure you are in the client directory
3. Copy builded files to `public` direactory on server and commit changes
4. Push changes to heroku master `git push heroku master`
5. Revert `.env` variables on the client side if needed
