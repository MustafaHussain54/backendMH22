import mongoose ,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
  subscriber:{
    type : Schema.Types.ObjectId, //one who  is sunscribing
    ref:"User"

  },
  channel:{
    type : Schema.Types.ObjectId, //one to whom subscriber subscibed the channel
    ref:"User"

  }
},{timestamps : true})

export const subscription = mongoose.model("Subscription" , subscriptionSchema)