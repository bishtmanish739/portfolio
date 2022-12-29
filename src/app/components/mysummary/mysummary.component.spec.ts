import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysummaryComponent } from './mysummary.component';

describe('MysummaryComponent', () => {
  let component: MysummaryComponent;
  let fixture: ComponentFixture<MysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
