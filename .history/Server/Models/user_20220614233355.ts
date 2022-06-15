// step1 - import mongoose
import mongoose, {PassportLocalSchema} from "mongoose";
const Schema = mongoose.Schema;//alias for mongoose schema
import passportLocalMongoose from 'passport-local-mongoose';

//create a sch
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
       type:Date,
       default: Date.now()
    },
    Updated:
    {
      type:Date,
      default: Date.now()
    }


},
{
    collection:"users"

}
);


const Model = mongoose.model("Users", UserSchema);
export default Model;