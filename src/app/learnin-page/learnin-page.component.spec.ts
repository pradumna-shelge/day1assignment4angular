import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearninPageComponent } from './learnin-page.component';

describe('LearninPageComponent', () => {
  let component: LearninPageComponent;
  let fixture: ComponentFixture<LearninPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearninPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
