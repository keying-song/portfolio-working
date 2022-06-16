import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema
({ 
    Name: String,
    Phone: String,
    Email : String
},
{
    collection:"contacts"

}
);

const Model = mongoose.model("Contact", MovieSchema);
export default Model;