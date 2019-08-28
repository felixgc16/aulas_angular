import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorImageComponent } from './receptor-image.component';

describe('ReceptorImageComponent', () => {
  let component: ReceptorImageComponent;
  let fixture: ComponentFixture<ReceptorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
