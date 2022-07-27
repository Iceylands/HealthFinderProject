import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingDoctorsComponent } from './finding-doctors.component';

describe('FindingDoctorsComponent', () => {
  let component: FindingDoctorsComponent;
  let fixture: ComponentFixture<FindingDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindingDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindingDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
