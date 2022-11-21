
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { OntologyService } from 'src/app/service/ontology.service';

export interface Topic {
  topicName: String,
}

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  // @Input() topicList: any
  topics:any
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Topic>();

  
  constructor(
    private httpService: HttpService,
    private httpOnto: OntologyService
    ) {
  }
  
  ngOnInit() {
    localStorage.setItem('tabIndex','0')
    this.dataSource.paginator = this.paginator;
   this.httpOnto.getTopics().subscribe({
    next: (data:any) => {
      this.dataSource.data = data['allTopics']
    } 
   })
  }
  

  clicking(wtfisthis:any) {
    console.log(wtfisthis)
  }

  displayedColumns: string[] = ['topicName'];

}








