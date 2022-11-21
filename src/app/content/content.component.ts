import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OntologyService } from '../service/ontology.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    // private _location: Location,
    private httpOnto: OntologyService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }

  ngOnInit(): void {
  }
  
}
