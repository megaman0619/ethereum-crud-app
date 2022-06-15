import { Response, Request } from 'express'
import itemService from '../services/item'

const addItem = async (req: Request, res: Response): Promise<void> => {
  const params = req.body
  console.log(params)
  if (params === undefined) {
    res.status(200).json({ success: false, data: null, message: 'params is required!' })
    return
  }
  else {
    const result = await itemService.createOne(params)
    res.status(200).json({ success: result.success, data: result.data, message: result.message })
  }
}
const deleteItem = async (req: Request, res: Response): Promise<void> => {
  const params = req.body
  console.log(params)
  if (params === undefined) {
    res.status(200).json({ success: false, data: null, message: 'params is required!' })
    return
  }
  else {
    const result = await itemService.deleteOne(params)
    res.status(200).json({ success: result.success, data: result.data, message: result.message })
  }
}
const updateItem = async (req: Request, res: Response): Promise<void> => {
  const params = req.body
  console.log(params)
  if (params === undefined) {
    res.status(200).json({ success: false, data: null, message: 'params is required!' })
    return
  }
  else {
    const result = await itemService.updateOne(params)
    res.status(200).json({ success: result.success, data: result.data, message: result.message })
  }
}
const getItem = async (req: Request, res: Response): Promise<void> => {
  const result = await itemService.findAll()
  res.status(200).json({ success: result.success, data: result.data, message: result.message })
}
export default {
  addItem,
  deleteItem,
  updateItem,
  getItem
}
