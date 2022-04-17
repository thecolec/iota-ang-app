import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpageComponent } from './regpage.component';

describe('RegpageComponent', () => {
  let component: RegpageComponent;
  let fixture: ComponentFixture<RegpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
