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
  const { name, date, type } = req.body

  if (!name || !date || !type ) { return res.status(400).send({ error: 'name, date and type are required' })}

  try {
    const event = new Event({ name, date, type })
    await event.save()
    return res.status(201).send(event)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Add a trainer tip to an event
 * @param req 
 * @param res 
 * @returns 
 */
const addTrainerTip = async (req: Request, res: Response) => {
  const { id, title, data } = req.body

  if ( !id || !title || !data ) { return res.status(400).send({ error: 'tip title, tip data and id are required' })}

  try {
    const event = await Event.findByIdAndUpdate(  
      id,
      {$push: {"tips": {title: title, data: data}}},
      {upsert: true, new : true}
    )
    return res.status(200).send(event)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

export { getEvents, getEventById, deleteEvent, addEvent, addTrainerTip }