import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import fs from "fs";

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

const creds = JSON.parse(fs.readFileSync(`secrets/mongo-creds.json`))

await mongoose.connect(
    `mongodb+srv://${creds.username}:${creds.password}@cluster0.jnanb.mongodb.net/Electric-Parrot?retryWrites=true&w=majority`
);

const kittySchema = mongoose.Schema({
    name: String
})

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
// silence.speak();

await silence.save();
console.log(silence.name); 

mongoose.connection.close();