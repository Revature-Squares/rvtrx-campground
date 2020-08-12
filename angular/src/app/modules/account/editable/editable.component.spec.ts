import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EditableComponent } from './editable.component';
import { ElementRef } from '@angular/core';

describe('EditableComponent', () => {
  let component: EditableComponent;
  let fixture: ComponentFixture<EditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditableComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on input focusout should change value and trigger an event', () => {
    component.data = 'test';
    dispatchEvent(new Event('focusout'));
    fixture.detectChanges();
    expect(component.data).toBe('test', 'on focusout');
  });

  it('should adapt to the profile from setting Type', () => {
    const comp = fixture.debugElement.componentInstance;
    comp.setValidationType('name');
    fixture.whenStable().then(() => {
      expect(component.errorMessage).toBe('Names cannot contain punctuation, spaces, or numbers');
      expect(component.pattern).toEqual(/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/);
    });
  });
});
