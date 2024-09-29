import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCComponent } from './text-c.component';

describe('TextCComponent', () => {
  let component: TextCComponent;
  let fixture: ComponentFixture<TextCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
