import mongoose from 'mongoose'

function main(){

    const MONGO_URI = "mongodb+srv://aditya:arunadi@glosolar.pis5b.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((error) => {
        console.log("Database connection failed existing now...");
        console.error(error);
        process.exit();
    });
}

export default main;