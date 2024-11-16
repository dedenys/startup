const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
Now we can run the application with node index.js and hit the service with Curl.

node index.js &
curl localhost:3000

{"msg":"Simon service"}

# use fg to foreground and kill the process