const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
//const client = new MongoClient(url);
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
//const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('startup');
const userCollection = db.collection('user');
const conceptCollection = db.collection('concepts');
const tallyCollection = db.collection('tally');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});


async function testFunc(testing) {
  console.log(testing);
}

async function updateTallyData() {
  //int curNum = await tallyCollection.findOne({"number":})
  //await tallyCollection.updateOne({"number": 5});
  console.log("in tally function")
  await tallyCollection.updateOne(
    {},
    { $inc: { "number": 1 } },
  );
  //return tally.toArray();
  //return tallyCollection.updateOne({number: 15});

}

async function getTally() {
  let cursor = await tallyCollection.findOne({});
  //cursor = list(cursor)
  //console.log(cursor.size());
  
  //console.log(data);
  return cursor;
}

async function getConcepts(email) {
  //console.log(email);
  let cursor = await conceptCollection.findOne({ email: email }, { email: 0, concepts: 1 });
  //console.log(cursor);
  return cursor;
}

async function updateConceptData(email, concepts) {

  await conceptCollection.updateOne(
    { email: email},
    { $set: { "concepts": concepts } },
    { upsert: true},
  );
  //conceptCollection.insertOne(data);

}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
 // await updateTallyData();


  return user;
}

async function addConcept(concept) {
  return conceptCollection.insertOne(concept);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addConcept,
  getHighScores,
  testFunc,
  updateTallyData,
  getTally,
  getConcepts,
  updateConceptData,
};
