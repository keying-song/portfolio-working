import mongoose, {PassportLocalSchema} from "mongoose";
const Schema = mongoose.Schema;
import passport
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