import { Router } from 'express'
import { eventRoutes } from './events'
import { tipRoutes } from './tip'

const router = Router()

router.use('/api/events', eventRoutes)
router.use('/api/tip', tipRoutes)

export { router }