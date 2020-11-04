import { NextApiRequest, NextApiResponse } from "next"
import jwt from 'jsonwebtoken'
const key ='adihjaifjso;dmo;asmd p';
export default function (req: NextApiRequest, res: NextApiResponse) {
  if(!req.body){
      res.statusCode = 404;
      res.end('Error')
      return
  }
  const { username , password } = req.body ;
  res.statusCode = 200
  res.json({ 
      token : jwt.sign({
          username ,
          admin : username === 'admin'
      } , key)
   })
}
