import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OntologyService } from 'src/app/service/ontology.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {
  topicList: [] = [];
  subtopicList: any[] = [];
  form: any
  img: string = ''
  aeAudio: string =''
  beAudio: string = ''
  selected: string = ''
  selectedValue: any
  topicName: string = ''
  topicSub: string = ''
  isSelectTopicDone:boolean = false;
  constructor(
    // private _location: Location,
    private httpOnto: OntologyService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.httpOnto.getTopics().subscribe((data:any) => {
      this.topicList = data.allTopics
    })

    this.form = this.fb.group({
      vocab: ['', Validators.required],
      hasMeaning: ['', Validators.required],
      hasAEAudio: ['', Validators.required],
      hasBEAudio: ['', Validators.required],
      hasAEpronunciation: ['', Validators.required],
      hasBEpronunciation: ['', Validators.required],
      hasImage: ['', Validators.required],
    })
  }

  onSelectionChanged(data: any) {
      this.subtopicList = []
      this.topicName = data.value
      this.httpOnto.getSubClass(data.value)
      .subscribe((data:any) => {
        data.data.map((x:any) => {
          this.subtopicList.push(x['subClassName'])
        })
        if(this.subtopicList[0] == undefined) {
          this.subtopicList = []
        }
      })
      this.isSelectTopicDone = true;
  }

  subclassChange(data:any) {
    this.topicSub = data.value
  }

  onImageChange(data:any) {
    // console.log(data)
    const previewImg:any = document.querySelector('.img-show')
    previewImg.src = data.target.value
  }

  onAEchange(data: any) {
    const test:any = document.querySelector('.aeAudioTab')
    test.setAttribute('src',data.target.value)
    test.load()
  }
  onBEchange(data: any) {
    const test:any = document.querySelector('.beAudioTab')
    test.setAttribute('src',data.target.value)
    test.load()
  }

  onSubmit() {
    const result = {
      ...this.form.value,
      topic: this.topicName,
      subTopic: this.topicSub
    } 
    
    this.httpOnto.createNew(result).subscribe(data => {
      console.log(data)
    })
  }

}
