import { application, Request, Response } from "express";
import Message from "../models/message";
import User from "../models/user";
import config from "../config/config";

class Controller {
  public async sendMsg(req: Request, res: Response) {
    try {
      let msg = new Message(req.body);
      await msg.save();
      res.status(200).json({ res: "Saved successfull" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async getMsg(req: Request, res: Response) {
    try {
      let data = await Message.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async deleteMsg(req: Request, res: Response) {
    try {
      let findMsg = await Message.find({ idUser: req.params.idUser });

      if (findMsg) {
        let deleteMsg = await Message.deleteOne({ idUser: req.params.idUser });
        res.status(200).json({ res: "message deleted" });
      }

      res.status(404).json({ res: "Message not found" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async addUser(req: Request, res: Response) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).json({ res: "Added successfull", users: user });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      let data = await User.find();
      res.status(200).json({ res: data });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async findUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (user) {
        res.status(200).json({ res: user });
      }
      res.status(400).json({ res: "User not found" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }
}

export default new Controller();
