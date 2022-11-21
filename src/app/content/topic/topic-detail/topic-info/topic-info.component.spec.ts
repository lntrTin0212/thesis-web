import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInfoComponent } from './topic-info.component';

describe('TopicInfoComponent', () => {
  let component: TopicInfoComponent;
  let fixture: ComponentFixture<TopicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
