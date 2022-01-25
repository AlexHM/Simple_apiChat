import {model,Schema,Document} from 'mongoose';

export interface UUser extends Document{
    idUser:number;
    username:string;
    name: string;
}

const userSchemna = new Schema({
    idUser:{
        type: Number,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    }
})

export default model<UUser>("users",userSchemna)