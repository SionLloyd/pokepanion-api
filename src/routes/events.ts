import { Router } from 'express'
import { getEvents, getEventById, deleteEvent, addEvent } from '../controllers/event'

const router = Router()

router.get('/', getEvents)
router.get('/get/id', getEventById)
router.delete('/delete/id', deleteEvent)
router.post('/add', addEvent)

export { router as eventRoutes }