let express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.status(200).render('home')
})



app.use((req,res)=>{
    res.status(404).send('404 not found')
})

app.listen(port, () =>{
    console.log(`Listening on PORT ${port}`);
})
