// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '../../lib/db'
import { getSession } from "next-auth/react"

type Res={
    status:string,
    isMatched?:boolean,
    accountId?:number
}

const bcrypt = require('bcryptjs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
    async function Create(user_id:string, password:any){
        await excuteQuery({
            query: 'INSERT INTO account(user_id, password) VALUES(?,?)',
            values: [user_id, password],
        });
    }

    async function Authenticate(user_id:string, password:any){
        const result = await excuteQuery({
            query: 'SELECT * FROM account WHERE user_id = ?',
            values: [user_id],
        });
        if(result.length === 0) return false;
        const isMatch = await bcrypt.compareSync(password, result[0].password);
        //console.table({user_id:result[0].user_id, password:result[0].password, isMatch:isMatch});
        let data:any ={isMatch:isMatch, accountId: result[0].account_id};
        return data;
    }

    try{
        const user_id = req.body.user;
        const password = req.body.password;
        const action = req.body.action;
        
        switch (action){
            case 'create':
                let hashedPassword = bcrypt.hashSync(password, 10);
                console.table({id:user_id,password:hashedPassword});
                //Create(user_id,hashedPassword).then(result=>{console.log(result)}).catch(err=>{console.log(err)});
                //const insertUser = `INSERT INTO account (user_id, password) VALUES ('${user_id}', '${hashedPassword}')`;
                break;
            case 'authenticate':
                let isMatched = false;
                let accountId = 0;
                // Authenticate(user_id, password).then(result=>{
                //     isMatched = result.isMatch;
                //     accountId= result.accountId;
                //     res.status(200).json({ status: 'success', isMatched:isMatched, accountId: accountId  });
                // }).catch(err=>{console.log(err)});
                const authResult = await excuteQuery({
                    query: 'SELECT * FROM account WHERE user_id = ?',
                    values: [user_id],
                });
                if(authResult.length === 0){
                    res.status(200).json({ status: 'not found'});
                }else{
                    const isMatch = await bcrypt.compareSync(password, authResult[0].password);
                    res.status(200).json({ status: 'success', isMatched:isMatch, accountId: authResult[0].account_id  });
                }
            break;
            default:
                res.status(200).json({ status: 'success' });
                break;
        }
        //console.log("connected");
        
        
    }catch(e){
        console.log(e);
        res.status(200).json({ status: 'error' })
    }
}
