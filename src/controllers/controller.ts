import { application, Request,Response } from "express";
import Message from "../models/message";
import User from "../models/user";
import config from "../config/config";

class Controller{


    public async sendMsg(req:Request,res:Response){
        
        try {
            let msg = new Message(req.body);            
            await msg.save();
            res.status(200).json({res: "Saved successfull"});
        } catch (error) {
            res.status(404).json({res:"Error",error});
        }
    }

    public async getMsg(req:Request,res:Response){
        
        try {
            let data =  await Message.find()
            res.status(200).json({res:data})
        } catch (error) {
            res.status(404).json({res:"Error",error});
            
        }
    }

    public async addUser(req:Request,res:Response){
        try {
            const user = new User(req.body);
            await user.save();
            res.status(200).json({res:"Added successfull",users:user});

        } catch (error) {
            res.status(404).json({res:"Error",error});
        }
    }

    public async getUsers(req:Request,res:Response){
        try {
            
            let data =  await User.find()
            res.status(200).json({res:data})

        } catch (error) {
            res.status(404).json({res:"Error",error});
        }
    }

   
}

export default new Controller();



