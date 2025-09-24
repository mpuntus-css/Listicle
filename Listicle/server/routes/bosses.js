import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bossData from '../data/bosses.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(bossData)
})

router.get('/:bossId', (req, res) => {
  const { bossId } = req.params
  
  const bossExists = bossData.find(boss => boss.id === bossId)
  
  if (bossExists) {
    res.status(200).sendFile(path.resolve(__dirname, '../public/boss.html'))
  } else {
    res.status(404).sendFile(path.resolve(__dirname, '../../public/404.html'))
  }
})

export default router
