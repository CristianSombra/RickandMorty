// const http = require("http");
// const characters = require("./utils/data");
// const getCharById = require("./controllers/getChardById");

// const PORT = 3001;

// http.createServer((req, res) => {
//     console.log(`Está llegando una petición ${PORT}`);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const {url} = req; 
    
//     // ------ HM webserver -------
    
//     // if (url.includes("/rickandmorty/character/")) {
//     //     const urlId = parseInt(url.split("/").pop());       
//     //     let found = characters.find(character => character.id === urlId);
   
//     // if (found) {
//     //     res
//     //     .writeHead(200, {"Content-Type": "application/json"})
//     //     .end(JSON.stringify(found));
//     //     }
    

//     // ----- HM Promises ------------
//     if(url.includes("/rickandmorty/character/")) {
//         const urlId = url.split("/").pop();
//         getCharById(res,urlId) 
//     }
// }) 
// .listen(PORT, "localhost");

// De acá para abajo se realiza con EXPRESS

const express = require('express');
const router = require("./routes");
const { conn } =require("./DB_connection");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   conn.sync({force: true})
   console.log('Server raised in port: ' + PORT);
});