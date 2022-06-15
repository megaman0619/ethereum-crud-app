import { Item, IItem } from '../models/item'

const findAll = async () => {
  try {
    const result: IItem[] = await Item.find()
    console.log(result)
    return { success: true, data: result, message: 'DB Operation about <find all> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <find all> is Failed!' }
  }
}

const findOne = async (filter: any) => {
  try {
    const result: IItem = await Item.findOne(filter)

    return { success: true, data: result, message: 'DB Operation about <find one> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <find one> is Failed!' }
  }
}

const createOne = async (data: any) => {
  try {
    const result: IItem = await Item.create(data)

    return { success: true, data: result, message: 'DB Operation about <create one> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <create one> is Failed!' }
  }
}

const updateOne = async (data: any) => {
  try {
    const filter = { _id: data._id }
    delete data._id
    const result: IItem = await Item.findOneAndUpdate(filter, data, { new: true })

    return { success: true, data: result, message: 'DB Operation about <update one> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <update one> is Failed!' }
  }
}

const deleteAll = async () => {
  try {
    const result = await Item.deleteMany({})

    return { success: true, data: result, message: 'DB Operation about <delete all> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <delete all> is Failed!' }
  }
}

const deleteOne = async (data: any) => {
  console.log("data : ", data)
  try {
    const result = await Item.deleteOne({ _id: data._id })
    console.log("result : ", result)
    return { success: true, data: result, message: 'DB Operation about <delete one> is Success!' }
  } catch (error) {
    return { success: false, data: null, message: 'DB Operation about <delete one> is Failed!' }
  }
}

export default {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteAll,
  deleteOne,
}