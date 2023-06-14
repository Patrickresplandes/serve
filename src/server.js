const express = require('express');

const app = express();


app.get('/atualizou', (resquest,response) =>{
        return response.json({message:'atualizou'})
})
app.get('/',(resquest,response) =>{
    return response.json({message:'Server is up'});
})

app.post('/teste',(resquest,response)=>{
    const {name,date} = request.body;
    return response.json({name,date})
} )

app.listen(8000)