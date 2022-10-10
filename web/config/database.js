import { MongoClient } from "mongodb";

async function main() {
    const uri = "mongodb+srv://aditya:arunadi@glosolar.pis5b.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }
}

main().catch(console.error);

export default main;













// import mongoose from 'mongoose'

// const MONGO_URI = "mongodb+srv://aditya:arunadi@glosolar.pis5b.mongodb.net/?retryWrites=true&w=majority"

// export const databaseConnect = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology : true
//     })
//     .then(() => {
//         console.log("Database successfully connected");
//     })
//     .catch((error) => {
//         console.log("Database connection failed existing now...");
//         console.error(error);
//         process.exit();
//     });
// }