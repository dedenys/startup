const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];
let concepts = [];
let tally = {tallynum: 0};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

apiRouter.get('/concepts', (_req, res) => {
  res.send(concepts);
});

//var testdata = {test:"testdata"};


// apiRouter.get('/test', (_req, res) => {
//    console.log("In Test");
//    res.send(tally);
// });

apiRouter.get('/tallynum', (_req, res) => {
  console.log("tally");
  res.send(tally);
});


apiRouter.post('/tally', (req, res) => {
  newtally = updateTally(req.body, tally);
  console.log("tally test")
  res.send(newtally);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

apiRouter.post('/concept', (req, res) => {
  concepts = updateConcepts(req.body, concepts);
  res.send(concepts);
});

apiRouter.put('/concept', (req, res) => {
  console.log(req.body)
  concepts = req.body;
  res.send(concepts);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
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
  console.log("updated tally");
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

  console.log(concepts);

  return concepts;
}
