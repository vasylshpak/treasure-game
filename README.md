Treasure Game Task - React Project with Node Express Backend

## How to play now

(The Game still need a lot of modifications on server side server, also it is not fully conected to the front end part, also no tests in the code - only manual)

Board from server

```
POST /api/game
```

Return the the game via pesonal ID

```
GET api/game/:id
```

Send your turn back to the server

```
POST api/game/:id/turn
```

ID Flag - is needed to set personal route to the game and save the result in Score
turnsCounter - actual score
finished - to check if the user find all of the treasures

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
cd server
yarn dev
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```
