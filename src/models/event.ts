import { Schema, model } from "mongoose";

interface IEvent {
  name: String,
  date: String, // Change in future?
  type: String,
  location: String,
  rewards: String,
  cost: String,
  submittedBy: String
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
  },
  location: {
    type: String,
    required: true,
  },
  rewards: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  submittedBy: {
    type: String,
    required: true,
  }
})

const Event = model<IEvent>('Event', eventSchema)

export { Event }