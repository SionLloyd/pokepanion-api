import { Schema, model } from "mongoose";

interface ITip {
  id: String,
  type: String,
  data: String
}

const tipSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
})

const Tip = model<ITip>('Tip', tipSchema)

export { Tip }