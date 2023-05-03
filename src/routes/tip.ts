import { Router } from 'express'
import { addTrainerTip, deleteTrainerTip, deleteAllTrainerTips, getAllTrainerTips, getAllTrainerTipsById } from '../controllers/tip'

const router = Router()

router.post('/add', addTrainerTip)
router.delete('/delete', deleteTrainerTip)
router.delete('/delete/all', deleteAllTrainerTips)
router.get('/', getAllTrainerTips)
router.post('/get/id', getAllTrainerTipsById)

export { router as tipRoutes }

