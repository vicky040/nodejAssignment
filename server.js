const express = require('express'); 
const { connectDB } = require('./db/connect');
const dotenv = require('dotenv'); 
const  userroute  = require('./routes/user');
const productroute = require('./routes/product')
const app = express()

dotenv.config({ path:'./config/.env'})

app.use(express.json());

app.use("/api/user" , userroute); 
app.use("/api/user" , productroute);

const PORT = process.env.PORT ; 

app.listen(PORT, ()=> {
    connectDB()
    console.log(`server is running on ${PORT}`);
})