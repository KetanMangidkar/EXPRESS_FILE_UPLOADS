const app =  require("./index");

const connect = require("./config/db");

app.listen(9555,async () =>{

    try{
        await connect();
        console.log("Listening on port 9555")

    }catch(error){
        return console.error(error.message);
    }
})