import { Component, OnInit } from '@angular/core';
import {Personne} from "../class/Personne";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  public personnes: Array<Personne> = [];
  constructor() { }

  ngOnInit(): void {
    this.initPersonnes();
  }
initPersonnes(){
    this.personnes.push(new Personne('Paul'));
    this.personnes.push(new Personne('Jean'));
}
}
