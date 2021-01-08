import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group-competences',
  templateUrl: './list-group-competences.component.html',
  styleUrls: ['./list-group-competences.component.css']
})
export class ListGroupCompetencesComponent implements OnInit {
  group = [
    1, 2, 3, 4, 5, 6
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
