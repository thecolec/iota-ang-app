import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesPanelComponent } from './minutes-panel.component';

describe('MinutesPanelComponent', () => {
  let component: MinutesPanelComponent;
  let fixture: ComponentFixture<MinutesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
