import { Schema, model } from "mongoose";

interface IEvent {
  name: String,
  date: String, // Change in future?
  type: String,
}

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
})

const Event = model<IEvent>('Event', eventSchema)

export { Event }