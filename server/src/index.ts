import express from 'express';
import cors from "cors";
import { Request , Response } from 'express';
import User from '../model/User.js'

const PORT = "3003"
const app = express();

app.use(cors<Request>());
app.use(express.json());


const run = async () =>{
        
const user1 = new User({
    username: "ali",
    userId: 1,
    email : "ali@gmail.com"    
})  

await user1.save()

console.log(user1)
} 

run();

app.get("/" ,  (req :Request , res:Response) =>{

    res.json({
        status:"ok",
        shit : true
    })
})

app.post("/" ,  (req :Request , res:Response) =>{

    console.log(req.body)
    res.json(req.body)

})


app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
  });
