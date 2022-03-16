import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

console.log(dirname);

await mongoose.connect(
  "mongodb+srv://Luke:3M60BDyt6Gm@cluster0.jnanb.mongodb.net/Electric-Parrot?retryWrites=true&w=majority"//,
//   {
//     ssl: true,
//     sslValidate: true,
//     sslCA: `${dirname}/../secrets/dbadmin-cert.pem`,
//   }
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