const express = require("express");
const cors = require("cors")
const app = express();
const axios =require('axios')

app.use(cors())

app.get('/', async(req, res)=> {

    // try só é para casos de acahar um error, mas toda vez que for consumir uma api deve utilizar async
    try{
        const { data } = await axios(`https://jsonplaceholder.typicode.com/users`)
        return res.json(data)
    }catch (error){
        console.error(error)
    }
    // response é a resposta do axios, mas eu desestruturo e tiro somente o data  de dentro do response

})



app.listen ('4567');
