const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        
        const conn = await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            family:4
        })

        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = {connectDB} ; 