// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '../../lib/db'

type Result={
    status:string
}

const bcrypt = require('bcryptjs');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
    async function Create(user_id:string, password:any){
        await excuteQuery({
            query: 'INSERT INTO account(user_id, password) VALUES(?,?)',
            values: [user_id, password],
        });
    }

    try{
        const user_id = req.body.user;
        const password = req.body.password;
        const action = req.body.action;
        
        switch (action){
             case  'create':
                let hashedPassword = bcrypt.hashSync(password, 10);
                //console.table({id:user_id,password:hashedPassword});
                Create(user_id,hashedPassword).then(result=>{console.log(result)}).catch(err=>{console.log(err)});
                //const insertUser = `INSERT INTO account (user_id, password) VALUES ('${user_id}', '${hashedPassword}')`;

            break;
            default:
                break;
        }
        //console.log("connected");
        
        res.status(200).json({ status: 'success' })
    }catch(e){
        console.log(e);
        res.status(200).json({ status: 'failed' })
    }
}
