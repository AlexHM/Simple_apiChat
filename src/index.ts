import express,{application,Application} from 'express'
import cors from 'cors'
import { Routes } from './routes/routes'
import morgan from 'morgan'
import "./database"



class Index{

    app : Application
    constructor(){

        this.app = express()
        this.app.set("port",process.env.PORT || 3000)
        this.app.use(cors())
        this.app.use(morgan("dev"))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        let port = this.app.get("port")
        this.app.use(new Routes().enrutador)
        this.app.listen(port,()=>{
            console.log("Server listening on port: ",port);
        
        })

    }

}


new Index()
