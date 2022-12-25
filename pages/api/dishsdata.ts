import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export const buildDishesPath = () => {
  return path.join(process.cwd(), "/json", '/dishes.json')
}

export const extractDishes = async (filePath: string) => {
  const fileData = await fs.readFile(filePath)
  return JSON.parse(fileData.toString())
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = req.body
  let filePath = buildDishesPath()
  let data = null
  switch (req.method) {
    case 'GET':
      data = await extractDishes(filePath)
      console.log("2", data)
      res.status(200).json({ message: 'This works!', data: data })
  }
}

export default handler