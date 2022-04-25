import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinuteEditorComponent } from './minute-editor.component';

describe('MinuteEditorComponent', () => {
  let component: MinuteEditorComponent;
  let fixture: ComponentFixture<MinuteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinuteEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
