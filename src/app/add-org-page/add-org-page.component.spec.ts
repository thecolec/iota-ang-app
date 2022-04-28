import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrgPageComponent } from './add-org-page.component';

describe('AddOrgPageComponent', () => {
  let component: AddOrgPageComponent;
  let fixture: ComponentFixture<AddOrgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
