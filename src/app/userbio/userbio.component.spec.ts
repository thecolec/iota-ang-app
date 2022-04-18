import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbioComponent } from './userbio.component';

describe('UserbioComponent', () => {
  let component: UserbioComponent;
  let fixture: ComponentFixture<UserbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
