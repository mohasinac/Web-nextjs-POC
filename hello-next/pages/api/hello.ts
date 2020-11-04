// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

//localhost:3000/api/random
//if we dont touch res we get continuous loading
//inside pages only components
// inside /api only apis and no components
export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log('requestbody' ,req.body)
  //console.log('response', res.sendDate)
  res.setHeader('X-custom','my header');
  res.setHeader('Set-Cookie','mycookie=true');
  res.statusCode = 200
  res.json({ number: Math.floor(Math.random() * 10) })
}
