const data = require("./database");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParse);
server.post('/words', (req, res) => {
    if (req.method === 'POST') {
      let newWord = req.body;
      data.push({
        "word": newWord.word,
        "translation": newWord.translation,
        "definition": newWord.definition});
      word = data.find(data => {return data.word == newWord.word});
      return word;
    }
});

server.listen(port);