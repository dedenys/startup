const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];
let concepts = [];
let tally = {tallynum: 0};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user


// apiRouter.post('/auth/create', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     res.status(409).send({ msg: 'Existing user' });
//   } else {
//     const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
//     users[user.email] = user;

//     res.send({ token: user.token });
//   }
// });
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    await DB.updateConceptData(req.body.email, [])

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth login an existing user


// apiRouter.post('/auth/login', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     if (req.body.password === user.password) {
//       user.token = uuid.v4();
//       res.send({ token: user.token });
//       return;
//     }
//   }
//   res.status(401).send({ msg: 'Unauthorized' });
// });
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  //console.log("logging in the app")
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      //console.log("logging in");
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user


// apiRouter.delete('/auth/logout', (req, res) => {
//   const user = Object.values(users).find((u) => u.token === req.body.token);
//   if (user) {
//     delete user.token;
//   }
//   res.status(204).end();
// });
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    next();
    //console.log('test')
    //res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

apiRouter.get('/concepts', async (req, res) => {

  foundemail = req.query.email
  //console.log(foundemail)

  data = await DB.getConcepts(foundemail);
  //console.log(foundemail);
  //console.log(data.concepts);
  //console.log(req.body)
  //const name = req.query.name;
  //console.log("getting concepts. . .")
  //thedata = await DB.getConcepts();
  //console.log(thedata);

  if (data) {
    res.send(data.concepts);
  }

  
});

//var testdata = {test:"testdata"};


// apiRouter.get('/test', (_req, res) => {
//    console.log("In Test");
//    res.send(tally);
// });

apiRouter.get('/tallynum', async (_req, res) => {
  //.log("tally");
  //DB.updateTallyData();
  thedata = await DB.getTally();
  console.log(thedata.number);
  tally = {tallynum: thedata.number}
  //thedata = list(thedata);
  res.send(tally);
});


apiRouter.post('/tally', async (req, res) => {
  newtally = updateTally(req.body, tally);
  //console.log("tally test");
  //await DB.testFunc("hello");
  //console.log("tally test2");
  res.send(newtally);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

apiRouter.post('/concept', async (req, res) => {
  concepts = updateConcepts(req.body[0], concepts);
  console.log("added concept!")
  data = await DB.getConcepts(req.body[1])
  newconcepts = data.concepts
  newconcepts.push(req.body[0])

 // newconcepts = updateConcepts(req.body[0], realconcepts)
  console.log(newconcepts)
  DB.updateConceptData(req.body[1], newconcepts);
  //awaitconsole.log(DB.updateTallyData());
  res.send(newconcepts);
});


apiRouter.put('/concept', async (req, res) => {
  //console.log(req.body)
  concepts = req.body;
  email = req.body[1]
  DB.updateConceptData(email, req.body[0])
  console.log("reviewing concept");
  await console.log(DB.updateTallyData());
  res.send(concepts);
  //console.log(concepts);
});


app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}

function updateTally(newScore, currenttally) {
  tally.tallynum += 1;
 // console.log("updated tally");
  return {tally};
}

function updateConcepts(newConcept, concepts) {
  // let found = false;
  // for (const [i, prevScore] of concepts.entries()) {
  //   if (newScore.score > prevScore.score) {
  //     concepts.splice(i, 0, newScore);
  //     found = true;
  //     break;
  //   }
  // }

  // if (!found) {
  //   concepts.push(newConcept);
  // }
  concepts.push(newConcept);

  //console.log(concepts);

  return concepts;
}

// const httpService = app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

peerProxy(httpService);