import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorVideoComponent } from './receptor-video.component';

describe('ReceptorVideoComponent', () => {
  let component: ReceptorVideoComponent;
  let fixture: ComponentFixture<ReceptorVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptorVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
