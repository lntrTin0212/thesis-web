
import {  Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { HttpService } from 'src/app/service/http.service';
import { OntologyService } from 'src/app/service/ontology.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topics:any
  constructor(
    private httpService: HttpService,
    private httpOnto: OntologyService
    ) {
    
  }
  ngOnInit(): void {
  }
 
}






