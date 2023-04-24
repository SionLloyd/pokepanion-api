import { Router } from 'express'
import { getEvents, getEventById, getEventByType, deleteEvent, addEvent } from '../controllers/event'

const router = Router()

router.get('/', getEvents)
router.get('/get/id', getEventById)
router.get('/get/type', getEventByType)
router.delete('/delete/id', deleteEvent)
router.post('/add', addEvent)

export { router as eventRoutes }