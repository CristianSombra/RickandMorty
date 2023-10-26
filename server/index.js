const app = require("./src/app");
const { conn } = require("./src/db");


conn.sync({ force: false }).then(() => { //sincronizo la base de datos
    app.listen(3001, () => {
      console.log(`Server listening on port 3001`);
    })
    }).catch(error => console.error(error))