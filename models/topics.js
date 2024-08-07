import mongoose, {Schema } from "mongoose";
cobst topicSchema = new Schema(
  {
    noun: String,
    size: Number,
    type:string,
    uploaddate:Date
  }
)
