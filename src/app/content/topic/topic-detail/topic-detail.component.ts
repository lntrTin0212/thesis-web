import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OntologyService } from 'src/app/service/ontology.service';
import { Topic } from '../topic-list/topic-list.component';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  topicName:string = '';
  tabIndex:any
  currentIndex:any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  haveSubclass: boolean = false;
  topicTabs: any[] = []

  constructor(
    private _location: Location,
    private httpOnto: OntologyService,
    private router: Router,
    private route: ActivatedRoute    
  ) {}
  
  ngOnInit(): void {
    this.currentIndex = localStorage.getItem('tabIndex');
    if(this.currentIndex != 0) {
      this.tabIndex = this.currentIndex
    } 
    this.topicName = this.route.snapshot.params['topic']
    this.dataSource.paginator = this.paginator;

    this.getList()
  }

  getList() {
    this.httpOnto.getTopicDetails(this.topicName).subscribe({
      next: (data:any) => {
        if(data.data[0]['subClassName'] == undefined)  {
          // console.log("dont have subClass")
          this.haveSubclass = false
          this.dataSource.data = data.data

        } else {
           this.haveSubclass = true;
          // console.log("having subClass")
          this.dataSource.data = data.data
          this.dataSource.data.map((x:any) => {
            this.topicTabs.push(x['subClassName']);
          })
          // console.log(this.dataSource.data)
        }
      }
    })
  }

  handleBack() {
    this._location.back()
  }

  onChangeTab(event:any) {
    this.tabIndex = event.index
    localStorage.setItem('tabIndex',event.index)
  }
  onDelete(vocab:any) {
    // console.log(vocab)
    this.httpOnto.deleteVocab(vocab.trim())
      .subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
  navigateToDeail(topic:any) {
    this.router.navigate([topic], {
      relativeTo: this.route,
      queryParams: {index: this.tabIndex},
      queryParamsHandling: 'merge'
    })
  }
  // displayedColumns: string[] = ['no','vocabulary',"edit",'delete'];
  displayedColumns: string[] = ['vocabs'];

}
