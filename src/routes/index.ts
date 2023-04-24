import { Router } from 'express'
import { eventRoutes } from './events'

const router = Router()

router.use('/api/events', eventRoutes)

export { router }