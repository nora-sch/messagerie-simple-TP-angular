import { Component, OnInit } from '@angular/core';
import {Message} from "../class/Message";
import {Personne} from "../class/Personne";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
public messages: Array<Message> = [];
  constructor() { }

  ngOnInit(): void {
    this.initMessages();
  }

  initMessages(){
    let paul = new Personne('Paul');
    let jean = new Personne('Jean');
    this.messages.push(Message.createMessage(paul, 'This is message from Paul', new Date('2018-10-22T06:24:00')));
    this.messages.push(Message.createMessage(jean, 'This is message from Jean', new Date(Date.now())));
    this.messages.push(Message.createMessage(paul, 'This is another message from Paul', new Date('2021-05-18T04:15:00')));
    this.messages.push(Message.createMessage(jean, 'This is another message from Jean', new Date(Date.now())));
    }

  ngOnDestroy():void{
  }
}
