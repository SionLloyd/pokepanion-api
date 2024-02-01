import { Request, Response } from 'express';
import { Event } from '../models/event';

/**
 * Get all events and return it
 * @param req 
 * @param res 
 * @returns 
 */
const getEvents = async (req: Request, res: Response) => {
  try {
    console.log(req)
    const events = await Event.find({})
    return res.send(events)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Get an event by a given id and return it
 * @param req 
 * @param res 
 * @returns 
 */
const getEventById = async (req: Request, res: Response) => {
  const { id } = req.body

  if (!id) { return res.status(400).send({ error: 'Id is required for lookup' })}

  try {
    const event = await Event.findById(id)
    return res.send(event)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Delete an event from the list of events
 * @param req 
 * @param res 
 * @returns 
 */
const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.body

  if (!id) { return res.status(400).send({ error: 'Id is required for event deletion' })}

  try {
    await Event.deleteOne({ _id: id })
    return res.status(204).send({ message: "event deleted" })
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Add an event to the event list
 * @param req 
 * @param res 
 * @returns 
 */
const addEvent = async (req: Request, res: Response) => {
  const { name, date, type, location, rewards, cost, submittedBy } = req.body

  if (!name || !date || !type || !location || !rewards || !cost || !submittedBy ) { return res.status(400).send({ error: 'All relevant event information is required for event creation' })}

  try {
    const event = new Event({ name, date, type, location, rewards, cost, submittedBy })
    await event.save()
    return res.status(201).send(event)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

export { getEvents, getEventById, deleteEvent, addEvent }