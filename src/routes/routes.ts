import { Router } from "express";
import Controller from "../controllers/controller";
import { Request,Response,application } from "express";


export class Routes{

    enrutador: Router

    constructor(){
        this.enrutador = Router()
        this.enrutador.post("/message",(req:Request,res:Response)=>{
            Controller.sendMsg(req,res);
        })
        this.enrutador.get("/messages",(req:Request,res:Response)=>{
            Controller.getMsg(req,res)
        })
        this.enrutador.post("/user",(req:Request,res:Response)=>{
            Controller.addUser(req,res)
        })
        this.enrutador.get("/users",(req:Request,res:Response)=>{
            Controller.getUsers(req,res)
        });
       
        
    }
}