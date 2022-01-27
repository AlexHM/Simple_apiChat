import { model, Schema, Document } from "mongoose";

export interface UMessage extends Document {
  idUser: number;
  msg: string;
  date: string;
}

const messageSchema = new Schema({
  idUser: {
    type: Number,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default model<UMessage>("message", messageSchema);
