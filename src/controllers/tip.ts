import { Request, Response } from 'express';
import { Tip } from '../models/tip';

/**
 * Add a new trainer tip to an event
 * @param req 
 * @param res 
 * @returns 
 */
const addTrainerTip = async (req: Request, res: Response) => {
  const { id, type, data, submittedBy } = req.body

  if ( !id || !type || !data || !submittedBy ) { return res.status(400).send({ error: 'tip type, tip data and id are required' })}

  try {
    const tip = new Tip({ id, type, data, submittedBy })
    await tip.save()
    return res.status(201).send(tip)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Delete a trainer tip from the list of trainer tips
 * @param req 
 * @param res 
 * @returns 
 */
const deleteTrainerTip = async (req: Request, res: Response) => {
  const { id } = req.body

  if ( !id ) { return res.status(400).send({ error: 'id required for tip deletion' })}

  try {
    await Tip.deleteOne({ _id: id })
    return res.status(204).send({ message: "trainer tip deleted" })
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Delete all trainer tips for a given event
 * @param req 
 * @param res 
 * @returns 
 */
const deleteAllTrainerTips = async (req: Request, res: Response) => {
  const { id } = req.body

  if ( !id ) { return res.status(400).send({ error: 'id required for mass tip deletion' })}

  try {
    await Tip.deleteMany({ id: id })
    return res.status(204).send({ message: "trainer tips for the event have been deleted" })
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Get all trainer tips and return it
 * @param req 
 * @param res 
 * @returns 
 */
const getAllTrainerTips = async (req: Request, res: Response) => {
  try {
    const tips = await Tip.find({})
    return res.send(tips)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

/**
 * Find all trainer tips for a given ID
 * @param req 
 * @param res 
 * @returns 
 */
const getAllTrainerTipsById = async (req: Request, res: Response) => {
  const { id } = req.body

  if ( !id ) { return res.status(400).send({ error: 'Id is required for trainer tip lookup' })}

  try {
    const tips = await Tip.find({ 'id': { $in: id } });
    return res.send(tips)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

export { addTrainerTip, deleteTrainerTip, deleteAllTrainerTips, getAllTrainerTips, getAllTrainerTipsById }