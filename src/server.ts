import Express, { response }  from "express";

const app = Express();

app.get('/',(resquest,response) =>{
    return response.json({message:'Server is up'});
})

app.listen(8000)