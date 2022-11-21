import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OntologyService } from 'src/app/service/ontology.service';

@Component({
  selector: 'app-topic-info',
  templateUrl: './topic-info.component.html',
  styleUrls: ['./topic-info.component.scss']
})
export class TopicInfoComponent implements OnInit {
  topicname:string = ''
  vocab: string = ''
  form: any
  img: string = ''
  aeAudio: string =''
  beAudio: string = ''
  constructor(
    private _location: Location,
    private httpOnto: OntologyService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      vocab: ['', Validators.required],
      hasMeaning: ['', Validators.required],
      hasAEAudio: ['', Validators.required],
      hasBEAudio: ['', Validators.required],
      hasAEpronunciation: ['', Validators.required],
      hasBEpronunciation: ['', Validators.required],
      hasImage: ['', Validators.required],
    })
    this.topicname = this.route.snapshot.params['topic'];
    this.vocab = this.route.snapshot.params['vocab']
    this.httpOnto.getTopicInfo(this.topicname,this.vocab)
    .subscribe((data:any) => {
      // console.log(data)
      this.img = data['hasImage']
      this.aeAudio= data['hasAEAudio']
      this.beAudio = data['hasBEAudio']
      document.querySelector('.aeAudioTab')?.setAttribute('src',this.aeAudio)
      document.querySelector('.beAudioTab')?.setAttribute('src',this.beAudio)
      // console.log(this.beAudio)
      this.form.patchValue({
        vocab: data['vocab'],
        hasMeaning: data['hasMeaning'],
        hasAEAudio: data['hasAEAudio'],
        hasBEAudio: data['hasBEAudio'],
        hasAEpronunciation: data['hasAEpronunciation'],
        hasBEpronunciation: data['hasBEpronunciation'],
        hasImage: data['hasImage']
      })
    })
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
    console.log(this.form.value)
  }

  handleBack() {
    this._location.back()
  }

}
