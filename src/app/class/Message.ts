import {Personne} from "./Personne";

export class Message{
  personne:Personne;
  message:string;
  date: Date;

  constructor(personne:Personne, message:string) {
    this.personne = personne;
    this.message = message;
    this.date = new Date();
  }

  public static createMessage(personne:Personne, message:string, date:Date):Message{
    const msg:Message = new Message(personne, message);
    msg.date = date;
    return msg;
  }
}
